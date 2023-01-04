"use strict";
/*
    Generic ini membuat sebuah class, function atau interface menjadi memiliki berbagai macam
    type data yang dinamis, dinamis yang dimaksud bisa menerima tipe data yang berbeda
*/
function getData(value) {
    return value;
}
console.log(getData('Angga').length);
console.log(getData(456).length);
// generic
function myData(value) {
    return value;
}
console.log(myData("Maulana").length);
console.log(myData(1234));
// generic dgn arrow function
const arrowFunc = (value) => {
};
