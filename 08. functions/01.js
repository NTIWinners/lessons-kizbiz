function double (n1, n2) {
    if (n1 > n2) {
        console.log (n1 +' Больше чем ' + n2);
    } else if (n2 > n1) {
        console.log (n2 +' Больше чем ' + n1);
    } else if (n1 == n2) {
        console.log (n1 +' Равно ' + n2);
    }
}

var trig = 1

while (trig == 1) {
    console.log('\033c')

    console.log ('Введите 2 числа');

    double (parseInt(require('readline-sync').question()), parseInt(require('readline-sync').question()));

    console.log ('Введите 1, если хотите попробовать ещё раз.');
    console.log ('Введите 0, если хотите завершить программу.');
    trig = parseInt(require('readline-sync').question());
}