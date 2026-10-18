import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
const photos = JSON.parse(await readFile("src/data/photos.json", "utf8"));
for (const photo of photos) {
  const input = `public/images/${photo.slug}.jpg`;
  const { width, height } = await sharp(input).metadata();
  photo.width = width;
  photo.height = height;
  for (const size of [480, 800, 1400]) {
    const suffix = size === 1400 ? "" : `-${size}`;
    await sharp(input)
      .rotate()
      .resize({ width: size, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(`public/images/${photo.slug}${suffix}.webp`);
  }
}
await writeFile("src/data/photos.json", JSON.stringify(photos, null, 2) + "\n");
await sharp("public/images/album-cover-pic.jpg")
  .rotate()
  .resize(1200, 630, { fit: "cover", position: "attention" })
  .jpeg({ quality: 82 })
  .toFile("public/images/social-preview.jpg");
console.log(
  `Prepared responsive images for ${photos.length} photographs and social preview.`,
);
