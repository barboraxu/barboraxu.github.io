import concerts from "../data/concerts.json";
export const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Helsinki",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());
export const upcoming = concerts
  .filter((c) => c.endDate >= today)
  .sort((a, b) => a.date.localeCompare(b.date));
export const past = concerts
  .filter((c) => c.endDate < today)
  .sort((a, b) => b.date.localeCompare(a.date));
