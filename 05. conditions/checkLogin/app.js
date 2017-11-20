console.log('Кто пришёл?');
var userName = require('readline-sync').question();

if (userName == 'Admin') {
console.log('Пароль?');
var pass = require('readline-sync').question();

if (pass == 'Superman') {
console.log('Добро пожаловать!');
} else if (pass == '') {
console.log('Вход отменён');
} else {
console.log('Пароль неверен');
}

} else if (userName == '') {
console.log('Вход отменён');
} else {
console.log('Я вас не знаю');
process.exit();
}