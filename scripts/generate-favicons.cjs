const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// CRC32 table & function
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) {
      c = 0xedb88320 ^ (c >>> 1);
    } else {
      c = c >>> 1;
    }
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);

  const bodyBuf = Buffer.concat([typeBuf, data]);
  const crcVal = crc32(bodyBuf);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crcVal, 0);

  return Buffer.concat([lenBuf, bodyBuf, crcBuf]);
}

function renderRoofIcon(size) {
  // Returns RGBA Buffer of size * size
  const buf = Buffer.alloc(size * size * 4);

  // Background: Rounded slate box (#0f172a / #090a0f) with border/subtle glow
  // Icon: Amber summit peak (#f59e0b / #d97706 / #b45309)
  const radius = size * 0.22;
  const cx = size / 2;
  const cy = size / 2;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;

      // Check rounded rect bounds
      const dx = Math.max(0, Math.abs(x + 0.5 - cx) - (cx - radius));
      const dy = Math.max(0, Math.abs(y + 0.5 - cy) - (cy - radius));
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > radius) {
        // Outside rounded rect: transparent
        buf[idx] = 0;
        buf[idx + 1] = 0;
        buf[idx + 2] = 0;
        buf[idx + 3] = 0;
        continue;
      }

      // Base background color: Dark charcoal / deep slate #0a0d14
      let r = 10, g = 13, b = 20, a = 255;

      // Draw subtle top-to-bottom background gradient
      const bgGrad = y / size;
      r = Math.round(14 - bgGrad * 6);
      g = Math.round(18 - bgGrad * 8);
      b = Math.round(26 - bgGrad * 10);

      // Normalized coordinates (0 to 1)
      const nx = (x + 0.5) / size;
      const ny = (y + 0.5) / size;

      // Summit triangle geometry
      // Apex at (0.5, 0.20), bottom left at (0.16, 0.64), bottom right at (0.84, 0.64)
      const peakY = 0.20;
      const baseRoofY = 0.62;
      const leftX = 0.16;
      const rightX = 0.84;

      // Check if point (nx, ny) is inside the triangle
      const slope = (baseRoofY - peakY) / (0.5 - leftX); // positive slope
      const halfWidthAtY = (ny - peakY) / slope;

      let inRoofTriangle = false;
      if (ny >= peakY && ny <= baseRoofY) {
        if (Math.abs(nx - 0.5) <= halfWidthAtY) {
          inRoofTriangle = true;
        }
      }

      // Lower building block / base
      // x from 0.26 to 0.74, y from 0.62 to 0.82
      let inBuildingBase = false;
      if (nx >= 0.26 && nx <= 0.74 && ny >= baseRoofY && ny <= 0.80) {
        inBuildingBase = true;
      }

      // Arch/cutout at center bottom: x from 0.42 to 0.58, y from 0.68 to 0.80
      let inDoorCutout = false;
      if (nx >= 0.41 && nx <= 0.59 && ny >= 0.66 && ny <= 0.80) {
        inDoorCutout = true;
      }

      if (inDoorCutout) {
        // Dark door opening
        r = 10;
        g = 13;
        b = 20;
      } else if (inRoofTriangle) {
        // Vibrant Amber gradient (bright gold at top #fbbf24 to deep amber #d97706 at bottom)
        const t = (ny - peakY) / (baseRoofY - peakY);
        // Left side lighter, right side slightly shaded for 3D architectural look
        const isLeftSide = nx < 0.5;
        const shade = isLeftSide ? 1.0 : 0.86;

        r = Math.round((251 * (1 - t) + 217 * t) * shade);
        g = Math.round((191 * (1 - t) + 119 * t) * shade);
        b = Math.round((36 * (1 - t) + 6 * t) * shade);

        // Center seam highlight
        if (Math.abs(nx - 0.5) < 0.02) {
          r = Math.min(255, r + 30);
          g = Math.min(255, g + 25);
          b = Math.min(255, b + 20);
        }
      } else if (inBuildingBase) {
        // Building base amber/gold
        const t = (ny - baseRoofY) / (0.80 - baseRoofY);
        r = Math.round(217 * (1 - t * 0.2));
        g = Math.round(119 * (1 - t * 0.2));
        b = Math.round(6 * (1 - t * 0.2));
      }

      // Subtle anti-aliasing on borders
      if (dist > radius - 1) {
        const edgeA = (radius - dist) * 255;
        a = Math.max(0, Math.min(255, Math.round(edgeA)));
      }

      buf[idx] = r;
      buf[idx + 1] = g;
      buf[idx + 2] = b;
      buf[idx + 3] = a;
    }
  }

  return buf;
}

function encodePNG(width, height, rgbaBuffer) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8-bit depth
  ihdr[9] = 6; // RGBA color
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace
  const ihdrChunk = createChunk('IHDR', ihdr);

  // Scanlines with filter byte 0x00
  const scanlines = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    const rowOffsetIn = y * width * 4;
    const rowOffsetOut = y * (1 + width * 4);
    scanlines[rowOffsetOut] = 0; // Filter 0 (None)
    rgbaBuffer.copy(scanlines, rowOffsetOut + 1, rowOffsetIn, rowOffsetIn + width * 4);
  }

  const deflated = zlib.deflateSync(scanlines, { level: 9 });
  const idatChunk = createChunk('IDAT', deflated);

  // IEND
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

function createICO(images) {
  // images: array of { width, height, pngBuffer }
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type
  header.writeUInt16LE(count, 4); // count

  let offset = 6 + count * 16;
  const entries = [];
  const imageBuffers = [];

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry[0] = img.width >= 256 ? 0 : img.width;
    entry[1] = img.height >= 256 ? 0 : img.height;
    entry[2] = 0; // palette size
    entry[3] = 0; // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(img.pngBuffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset

    entries.push(entry);
    imageBuffers.push(img.pngBuffer);
    offset += img.pngBuffer.length;
  }

  return Buffer.concat([header, ...entries, ...imageBuffers]);
}

// Generate all asset sizes
const sizes = [16, 32, 48, 64, 180, 192, 512];
const generatedPNGs = {};

for (const s of sizes) {
  const rgba = renderRoofIcon(s);
  const png = encodePNG(s, s, rgba);
  generatedPNGs[s] = png;
}

// Write public assets
const publicDir = path.resolve(__dirname, '../public');

// 1. apple-touch-icon.png (180x180)
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), generatedPNGs[180]);
console.log('Created apple-touch-icon.png (180x180)');

// 2. icon-192.png and icon-512.png
fs.writeFileSync(path.join(publicDir, 'icon-192.png'), generatedPNGs[192]);
fs.writeFileSync(path.join(publicDir, 'icon-512.png'), generatedPNGs[512]);
console.log('Created icon-192.png & icon-512.png');

// 3. favicon.ico with 16, 32, 48
const icoBuffer = createICO([
  { width: 16, height: 16, pngBuffer: generatedPNGs[16] },
  { width: 32, height: 32, pngBuffer: generatedPNGs[32] },
  { width: 48, height: 48, pngBuffer: generatedPNGs[48] },
]);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
console.log('Created multi-res favicon.ico (16, 32, 48)');

// 4. SVG favicon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <defs>
    <linearGradient id="roofGrad" x1="16" y1="6" x2="16" y2="20" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="wallGrad" x1="16" y1="20" x2="16" y2="26" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
  </defs>
  <!-- Background rounded plate -->
  <rect width="32" height="32" rx="7" fill="#0b0f17"/>
  <!-- Roof peak triangle -->
  <polygon points="16,6 27,20 5,20" fill="url(#roofGrad)"/>
  <!-- Roof structure lower wall -->
  <rect x="8" y="20" width="16" height="6" fill="url(#wallGrad)"/>
  <!-- Architectural entrance cutout -->
  <rect x="13" y="21" width="6" height="5" rx="0.5" fill="#0b0f17"/>
</svg>
`;
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf8');
console.log('Created favicon.svg');
