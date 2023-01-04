"use strict";
// Interface adalah sebuah perjanjian yang mana semua property atau method dalam interface itu
// harus di implementasikan kepada class yang menggunakan interface tsb
// Dengan mengimplementasi interface pada Class kita dapat menggunakan property dan method yang 
// dimiliki oleh interface tersebut yang sifatnya adalah public
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
class Lenovo {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
let asus = new Asus('Asus', true);
console.log(asus.on());
console.log(asus.off());
let ln = new Lenovo('Lenovo', true);
console.log(ln.on());
console.log(ln.off());
