export default function timestampFormatter(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour12: false,
    timeZone: "GMT",
  });
  return formatter.format(date);
}
