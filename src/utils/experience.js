// Experience entries carry no timestamps and no explicit order — the API
// returns them in insertion order. Ordering therefore has to be derived
// from the free-text `timeSpan`, which is authored by hand in the
// dashboard and is inconsistent: separators vary ("–", "--", "-") and
// month names are sometimes truncated ("Apri 2024").

const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

// Matches the FIRST "<month> <year>" in the string, which is the start of
// the range regardless of which separator was used. Written as a literal
// rather than built from MONTHS so the escapes aren't passed through a
// string-escaping layer first.
const MONTH_YEAR =
  /(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?[\s,]*(\d{4})/i;

/** Milliseconds for the start of a range, or null if nothing parses. */
export const experienceStart = (timeSpan) => {
  const text = String(timeSpan ?? "");

  const monthYear = text.match(MONTH_YEAR);
  if (monthYear) {
    const month = MONTHS.indexOf(monthYear[1].toLowerCase());
    return new Date(Number(monthYear[2]), month, 1).getTime();
  }

  // Fall back to a bare year, e.g. "2024 - 2026".
  const year = text.match(/\b(\d{4})\b/);
  return year ? new Date(Number(year[1]), 0, 1).getTime() : null;
};

/** True while a role is still running ("... – Present"). */
export const isOngoing = (timeSpan) =>
  /present|current|now|ongoing/i.test(String(timeSpan ?? ""));

/**
 * Reverse-chronological, the way a CV reads: the current role first, then
 * everything else newest-first. Entries whose dates cannot be parsed keep
 * their relative order at the end rather than jumping to the top.
 */
export const sortExperience = (roles = []) =>
  [...roles].sort((a, b) => {
    const aOngoing = isOngoing(a?.timeSpan);
    const bOngoing = isOngoing(b?.timeSpan);
    if (aOngoing !== bOngoing) return aOngoing ? -1 : 1;

    const aStart = experienceStart(a?.timeSpan);
    const bStart = experienceStart(b?.timeSpan);
    if (aStart === null && bStart === null) return 0;
    if (aStart === null) return 1;
    if (bStart === null) return -1;

    return bStart - aStart;
  });
