const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const merge = [...new Set(a.concat(b))];