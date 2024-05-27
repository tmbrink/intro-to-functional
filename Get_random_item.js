const merge = [...new Set([...a, ...b])];
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const merge = (a, b) => a.concat(b);