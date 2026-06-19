import fs from 'fs';
import path from 'path';

// Note: we can use a basic binary reader for WebP to extract dimensions, 
// or simply use a quick node script. Since we are in Node, let's read the WebP header.
// WebP header starts with "RIFF" .... "WEBP"
// For VP8 (lossy), width and height are at offset 26.
// For VP8L (lossless), width and height are at offset 21.
// For VP8X (extended), width and height are at offset 24.
function getWebpDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  if (buffer.toString('ascii', 0, 4) !== 'RIFF' || buffer.toString('ascii', 8, 12) !== 'WEBP') {
    return null;
  }
  const type = buffer.toString('ascii', 12, 16);
  if (type === 'VP8 ') {
    const width = buffer.readUInt16LE(26);
    const height = buffer.readUInt16LE(28);
    return { width, height };
  } else if (type === 'VP8L') {
    // Lossless
    const n = buffer.readUInt32LE(21);
    const width = (n & 0x3FFF) + 1;
    const height = ((n >> 14) & 0x3FFF) + 1;
    return { width, height };
  } else if (type === 'VP8X') {
    // Extended
    const width = (buffer.readUInt32LE(24) & 0xFFFFFF) + 1;
    const height = (buffer.readUInt32LE(27) & 0xFFFFFF) + 1;
    return { width, height };
  }
  return null;
}

const dir = 'c:/Users/luizg/OneDrive/Desktop/project-bolt-sb1-fhvcxei4/project/public/images/testimonials';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp'));
files.forEach(f => {
  const p = path.join(dir, f);
  try {
    const dim = getWebpDimensions(p);
    console.log(`${f}: ${dim ? `${dim.width}x${dim.height} (ratio: ${(dim.width/dim.height).toFixed(3)})` : 'unknown'}`);
  } catch (e) {
    console.log(`${f}: error ${e.message}`);
  }
});
