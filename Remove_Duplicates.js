console.log(1 +  -"1" + "2");
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();