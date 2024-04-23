const uniqueArr = (arr) => [...new Set(arr)];
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
var c = new Counter(); c.add(); c.add(); c.add();