const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const isWeekday = (date) => date.getDay() % 6 !== 0;
const results = await Promise.all(resultingPromises);