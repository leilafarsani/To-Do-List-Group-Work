export default function timestampFormatter(date) {
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour12: false,
    timeZone: "GMT",
  };
  const formatter = new Intl.DateTimeFormat("en-GB", options);
  return formatter.format(date);
}
