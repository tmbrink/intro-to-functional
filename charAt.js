const flattenedArray = arr => [].concat(...arr);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const isArray = (arr) => Array.isArray(arr);