const randomBoolean = () => Math.random() >= 0.5;
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
var c = new Counter(); c.add(); c.add(); c.add();