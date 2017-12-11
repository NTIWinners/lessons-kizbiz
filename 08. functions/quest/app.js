var sleep = require('system-sleep');
var readline = require('readline-sync');

console.log("Ты - супергерой. Твоя задача - вызволить принцессу из плена Всемирной Сети, куда она попала, по неосторожности ткнув в рекламный баннер. Выбери действие:");
console.log();

sleep(500);
console.log("1. Поиграть в Доту");
sleep(500);
console.log("2. Узнать на каком сайте она застряла");
var answer1 = parseInt(readline.question());
console.log();
if (answer1 == 1) {
    console.log("Конец игры! Ты просидел в Доте до утра, и принцессу спас другой хакер");
    process.exit();
}
else if (answer1 == 2) {
    console.log("Оказывается, принцессе пришло письмо с рекламой суперстойкой помады, и там был баннер со ссылкой на сайт dontclickme.noob.");
}
else {
    showInvalid();
}
console.log();

sleep(500);
console.log("1. Послушаться совета в адресе сайта и поиграть в Доту");
sleep(500);
console.log("2. Перейти на сайт");
sleep(500);
console.log("3. Обновить антивирус, а потом перейти на сайт");
var answer2 = parseInt(readline.question());
console.log();
if (answer2 == 1) {
    console.log("Конец игры! Проигрыш - другой хакер спас принцессу");
    process.exit();
}
else if (answer2 == 2) {
    console.log("Конец игры! Проигрыш - игрок заразился тем же вирусом, что и принцесса, застрял на том же сайте со сломанным компьютером");
    process.exit();
}
else if (answer2 == 3) {
    console.log("Игрок встречает противника - Капча-Монстра, который не дает обновить антивирус. Чтобы его победить, нужно решить задачку: сколько будет 2 + 2 * 2?");
}
else {
    showInvalid();
}
console.log();

sleep(500);
console.log("1. А, ну ее, математика для нубов! Пойду в Доту поиграю!");
sleep(500);
console.log("2. Проверить исходный код Капча-Монстра");
sleep(500);
console.log("3. Ответить монстру: 6");
var answer3 = parseInt(readline.question());
console.log();
if (answer3 == 1) {
    console.log("Конец игры! Проигрыш - другой хакер спас принцессу");
    process.exit();
}
else if (answer3 == 2) {
    console.log("Игрок вскрывает код Капча-Монстра и видит, что тот печатает черным цветом некоторые символы. Ух ты! Их не видно на черном фоне!");
}
else if (answer3 == 3) {
    console.log("Конец игры! Проигрыш - было бы слишком легко выиграть! На самом деле там невидимые скобки - это и есть супер-способность Капча-Монстра! Задание выглядит как (2 + 2) * 2");
    process.exit();
}
else {
    showInvalid();
}
console.log();

sleep(500);
console.log("1. Круто, пойду попробую так в своей программе!");
sleep(500);
console.log("2. Ответить монстру: 6");
sleep(500);
console.log("3. Заменить цвет всех черных символов на белый и перезагрузить Капчу-Монстра");
var answer4 = parseInt(readline.question());
console.log();
if (answer4 == 1) {
    console.log("Конец игры! Проигрыш - принцесса заблудилась во Всемирной Сети, пока герой ковырялся не там, где надо");
    process.exit();
}
else if (answer4 == 2) {
    console.log("Конец игры! Проигрыш - зря, что ли, подвох находил??");
    process.exit();
}
else if (answer4 == 3) {
    console.log("Капча-Монстра хрипит консольными командами, догружается, наконец, до конца и выдает: сколько будет (2 + 2) * 2?");
}
else {
    showInvalid();
}
console.log();

sleep(500);
console.log("1. Ответить монстру: 8");
sleep(500);
console.log("2. Герою лень считать, и он идет в Доту");
var answer5 = parseInt(readline.question());
console.log();
if (answer5 == 1) {
    console.log("Капча-Монстр обиженно сопит \"Как ты догадался? Я же спрятал скобки!\", отступает и позволяет обновить антивирус. Теперь герой защищен, и может перейти на сайт! Едва он делает это, как получает сообщение антивируса: Замечена и заблокирована вредоносная программа: WinLock 1.0. Файл-лекарство можно найти здесь: C:Antiviruscure.exe.");
}
else if (answer5 == 2) {
    console.log("Конец игры! Проигрыш - другой хакер спас принцессу");
    process.exit();
}
else {
    showInvalid();
}
console.log();

sleep(500);
console.log("1.Отправить лекарство принцессе по почте и пойти в Доту");
sleep(500);
console.log("2.Записать лекарство на флешку и пойти к принцессе домой");
var answer6 = parseInt(readline.question());
console.log();
if (answer6 == 1) {
    console.log("Конец игры! Проигрыш - у нее сломался компьютер, она не может получить твой файл! Принцессу спасает другой хакер");
    process.exit();
}
else if (answer6 == 2) {
    console.log("Ура!!! Победа! Ты успешно справился со всеми испытаниями и спас принцессу!");
    process.exit();
}
else {
    showInvalid();
}

function showInvalid(){
    console.log("Введен невалидный вариант! Конец игры");
    process.exit();
}