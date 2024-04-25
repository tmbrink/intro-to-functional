[foo, bar] = [bar, foo];
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);