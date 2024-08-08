const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const resultingPromises = urls.map((url) => makHttpRequest(url));
const arrayContains = (arr, element) => arr.includes(element);