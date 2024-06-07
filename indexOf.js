const fullName = name || 'buddy';
const isWeekday = (date) => date.getDay() % 6 !== 0;
const merge = Object.assign({}, obj1, obj2);