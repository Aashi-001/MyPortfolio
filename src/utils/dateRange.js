const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function parseMonthYear(value) {
  const [year, month] = value.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

function toMonthYearString(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function formatMonthYear(date) {
  return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
}

function monthsBetween(start, end) {
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  return Math.max(months, 0);
}

// "June 2026 – Present" / "Jan 2026 – June 2026" style label. endDate: null means ongoing.
export function formatDateRange(startDate, endDate) {
  const start = formatMonthYear(parseMonthYear(startDate));
  const end = endDate ? formatMonthYear(parseMonthYear(endDate)) : "Present";
  return `${start} – ${end}`;
}

// "2 months" / "1 yr 6 months" style label, computed from the dates instead of typed by hand.
export function formatDuration(startDate, endDate) {
  const start = parseMonthYear(startDate);
  const end = endDate ? parseMonthYear(endDate) : new Date();
  const months = monthsBetween(start, end);

  if (months < 1) return "Less than a month";

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (remainingMonths > 0) parts.push(`${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`);
  return parts.join(" ");
}

// Spans the earliest start to the latest end (or "Present" if any position is ongoing) —
// used for the combined tenure shown at the company level when someone held multiple roles there.
export function combineDateRange(positions) {
  const earliestStart = positions
    .map((p) => parseMonthYear(p.startDate))
    .reduce((earliest, d) => (d < earliest ? d : earliest));

  const isOngoing = positions.some((p) => !p.endDate);
  if (isOngoing) {
    return { startDate: toMonthYearString(earliestStart), endDate: null };
  }

  const latestEnd = positions
    .map((p) => parseMonthYear(p.endDate))
    .reduce((latest, d) => (d > latest ? d : latest));

  return { startDate: toMonthYearString(earliestStart), endDate: toMonthYearString(latestEnd) };
}
