"use strict";
/*
    absctract class, tidak bisa di instasiasi secara langsung karena dia masih belum jelas atau
    abstract. Dengan abstract class juga kita dapat membuat sebuah template untuk class turunan
*/
class Vehicle {
    start() {
        console.log('brummmm');
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
car.start();
console.log(car.wheels);
let motor = new Motorcycle();
motor.start();
console.log(motor.wheels);
