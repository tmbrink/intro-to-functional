const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;