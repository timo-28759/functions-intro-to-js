const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
var arr2 = arr1.reverse();
const merge = (a, b) => [...a, ...b];