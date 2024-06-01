const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
console.log(+"1" +  "1" + "2");