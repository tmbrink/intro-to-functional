var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const fullName = name || 'buddy';