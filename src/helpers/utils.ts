/* 
  Takes an object (prototype)
  Returns a function that
    Takes a property and a value
    Returns a shallow copy of the prototype, overriding the specified property
*/
export function updateFromPrototype<T>(prototype: T) {
  return function setProperty<K extends keyof T>(property: K, value: T[K]) {
    const newObj = { ...prototype };
    newObj[property] = value;
    return newObj;
  };
}

export function generateId() {
  return (
    Date.now().toString(36) +
    Math.random().toString(36).substring(2, 12).padStart(12, '0')
  );
}

/* 
  input format: YYYY-MM-DDDD
  returns string in format "Jan 2025"
*/
export function convertToMonthString(date: string) {
  const monthMap: Record<string, string> = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  };

  const parts = date.split('-');
  if (!parts[0] || !parts[1]) {
    return '';
  }

  return `${monthMap[parts[1]]} ${parts[0]}`;
}

export function makeString(array: string[], separator = ', ') {
  return array
    .filter((i) => !!i) // non-empty string
    .map((i) => i.trim())
    .join(separator);
}

/* 
  input: two strings in format "Jan 2025"
  returns: 
    "Jan 2025 – Jan 2026" or 
    "Jan - March 2025"
*/
export function getRangeString(start: string, end: string) {
  const from = convertToMonthString(start);
  const to = convertToMonthString(end);

  if (!from && !to) return '';
  if (!from) return to;
  if (!to) return from;

  const [fromMonth, fromYear] = from.split(' ');
  const [toMonth, toYear] = to.split(' ');

  return fromYear !== toYear
    ? `${from} – ${to}`
    : fromMonth !== toMonth
    ? `${fromMonth} – ${toMonth} ${fromYear}`
    : from;
}

export function getYear(date: string) {
  const parts = date.split('-');
  return parts[0] ?? '';
}
