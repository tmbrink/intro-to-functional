var regexp  = new RegExp('{{([^}]+)}}', 'g');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const appName = getAppName(channel);