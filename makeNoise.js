const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};