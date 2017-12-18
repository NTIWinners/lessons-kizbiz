function double (n1, n2) {
    var rez
    rez = n1 * n2;
    console.log ('Произведение ' + n1 + ' на ' + n2 + ' равно ' + rez);
}

var trig = 1

while (trig == 1) {
    console.log('\033c');

    console.log ('Введите 2 числа');

    double (parseInt(require('readline-sync').question()), parseInt(require('readline-sync').question()));

    console.log ('Введите 1, если хотите попробовать ещё раз.');
    console.log ('Введите 0, если хотите завершить программу.');
    trig = parseInt(require('readline-sync').question());
}