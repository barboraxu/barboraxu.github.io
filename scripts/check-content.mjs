import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
const json=async name=>JSON.parse(await readFile(`src/data/${name}.json`,'utf8'));
const photos=await json('photos');
assert.equal(new Set(photos.map(p=>p.slug)).size,photos.length,'Photo slugs must be unique');
for(const p of photos){assert(p.alt.trim(),'Photo requires alternative text');await access(`public/images/${p.slug}.jpg`);await access(`public/images/${p.slug}.webp`);}
const concerts=await json('concerts');
for(const c of concerts){assert(/^\d{4}-\d{2}-\d{2}$/.test(c.date));assert(!Number.isNaN(Date.parse(c.date)));assert(c.endDate>=c.date);assert(c.title);if(c.url)assert.equal(new URL(c.url).protocol,'https:');}
const music=await json('music');
for(const v of music.videos)assert(/^[\w-]{11}$/.test(v.id),'Invalid YouTube video ID');
console.log(`Content verified: ${photos.length} photos, ${concerts.length} events, ${music.videos.length} videos.`);
