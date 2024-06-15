const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const fullName = name || 'buddy';
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());