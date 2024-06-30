const merge = [...new Set([...a, ...b])];
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const merge = (a, b) => [...a, ...b];