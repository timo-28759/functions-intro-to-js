console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
console.log(+"1" +  "1" + "2");
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());