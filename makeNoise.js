const isEmptyArray = arr => !arr.length;
const scriptRootPath = path.join(repositoryRootPath, 'script');
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());