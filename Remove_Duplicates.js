console.log(+"1" +  "1" + "2");
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const symbolsPath = path.join(buildOutputPath, 'symbols');