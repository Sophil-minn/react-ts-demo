var isDone = false;
var age = 10;
var binaryNumber = 15;
// string
var firstName = 'viking';
var message = "Hello, ".concat(firstName, ", age is ").concat(age);
// undefined null
var u = undefined;
var n = null;
// 注意 undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
var num = undefined;
// any
var notSure = 4;
notSure = 'maybe it is a string';
notSure = 'boolean';
notSure.myName;
notSure.getName();
