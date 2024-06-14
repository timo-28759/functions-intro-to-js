const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());