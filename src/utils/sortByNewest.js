/**
 * Newest-first ordering that works with or without timestamps.
 *
 * Projects predate `timestamps: true` on the model, so most records have
 * no `createdAt`. A Mongo ObjectId embeds its creation time in the first
 * four bytes, so that serves as the fallback and every record can be
 * dated without a migration.
 */
const idTime = (id) => {
  if (typeof id !== "string" || id.length < 8) return 0;
  const seconds = parseInt(id.slice(0, 8), 16);
  return Number.isNaN(seconds) ? 0 : seconds * 1000;
};

export const createdAtOf = (item) =>
  Date.parse(item?.createdAt ?? "") || idTime(item?._id);

/** Does not mutate the input — the API response is shared state. */
export const sortByNewest = (items = []) =>
  [...items].sort((a, b) => createdAtOf(b) - createdAtOf(a));
