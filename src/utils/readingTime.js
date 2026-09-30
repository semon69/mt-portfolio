/** Rough read time from HTML body content, at ~200 words per minute. */
export const readingTime = (html) => {
  const words = String(html ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / 200));
};

/** "30 September 2026", or null when there's no usable date. */
export const formatDate = (value) => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? null
    : date.toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
};
