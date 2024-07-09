const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';