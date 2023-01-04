"use strict";
// tipe data pada balikan function
function getName() {
    return "Angga Maulana Efendi";
}
console.log(getName());
function getAge() {
    return 18;
}
console.log(getAge());
function printName() {
    console.log("Print name");
}
printName();
// argument types
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(6, 14);
console.log(result);
const add = (val1, val2) => {
    return val1 + val2;
};
console.log(add(6, 14));
// default parameters
const fullName = (first, last = "Efendi") => {
    return first + " " + last;
};
console.log(fullName("Angga"));
// optional parameter
const getUmur = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getUmur("A"));
const tambah = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(tambah(1));
