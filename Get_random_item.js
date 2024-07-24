const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
console.log("0 && 1 = "+(0 && 1));