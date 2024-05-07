const uniqueArray = arr => [...new Set(arr)];
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;