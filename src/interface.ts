// Interface adalah sebuah perjanjian yang mana semua property atau method dalam interface itu
// harus di implementasikan kepada class yang menggunakan interface tsb

interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

// Dengan mengimplementasi interface pada Class kita dapat menggunakan property dan method yang 
// dimiliki oleh interface tersebut yang sifatnya adalah public

class Asus implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming: boolean){
        this.name = name;
        this.isGaming = isGaming;
    }
    on(): void {
        console.log("nyala");
        
    }
    off(): void {
        console.log("mati");
        
    }
}

class Lenovo implements Laptop {

    name: string;
    keyboardLight: boolean;

    constructor(name: string, keyboardLight: boolean) {
        this.name = name;
        this.keyboardLight = keyboardLight
    }
    on(): void {
        console.log("nyala");
        
    }
    off(): void {
        console.log("mati");
        
    }
    
}

let asus = new Asus('Asus', true);
console.log(asus.on());
console.log(asus.off());

let ln = new Lenovo('Lenovo', true);
console.log(ln.on());
console.log(ln.off());