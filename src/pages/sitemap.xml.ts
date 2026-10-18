import photos from "../data/photos.json";
export function GET({ site }: { site: URL }) {
  const routes = [
    "",
    "music/",
    "concert/",
    "gallery/",
    "epk/",
    "oldforestechoes/",
    "contact/",
    ...photos.map((p) => `photos/${p.slug}/`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${new URL(route, site).href}</loc></url>`).join("")}</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
