import sharp from 'sharp';
import {readFile} from 'node:fs/promises';
const photos=JSON.parse(await readFile('src/data/photos.json','utf8'));
for(const photo of photos){await sharp(`public/images/${photo.slug}.jpg`).rotate().resize({width:1400,withoutEnlargement:true}).webp({quality:83}).toFile(`public/images/${photo.slug}.webp`);}
console.log(`Prepared ${photos.length} optimized photographs.`);
