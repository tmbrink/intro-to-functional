const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const fullName = name || 'buddy';
const channelName = getChannelName(channel);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;