const results = await Promise.all(resultingPromises);
const merge = [...new Set(a.concat(b))];
const electronDownloadPath = path.join(repositoryRootPath, 'electron');