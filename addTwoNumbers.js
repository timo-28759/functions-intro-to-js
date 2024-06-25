const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
var regexp  = new RegExp('{{([^}]+)}}', 'g');
var DELIM_SIZE = 4;