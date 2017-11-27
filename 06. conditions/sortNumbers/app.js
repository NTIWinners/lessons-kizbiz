console.log('Введите первое число');
var x = parseInt(require('readline-sync').question());
console.log('Введите второе число');
var y = parseInt(require('readline-sync').question());
console.log('Введите третье число');
var z = parseInt(require('readline-sync').question());

if (x>=y && x>=z){
if (y>z){
console.log(x + ", " + y + ", " +z);
}
else{
console.log(x + ", " + z + ", " +y);
}
}
else if (y>=x && y >=z){
if (x>z){
console.log(y + ", " + x + ", " +z);
}
else{
console.log(y + ", " + z + ", " +x);
}
}
else if (z>=x && z>=y){
if (x>y){
console.log(z + ", " + x + ", " +y);
}
else{
console.log(z + ", " + y + ", " +x);
}
}
process.exit();