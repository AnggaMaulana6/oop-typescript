"use strict";
/*
    Class
    adalah sebuah blueprint atau krangka untuk membuat sebuah object
    di dalam class juga menyimpan beberapa sifat dan perilaku sebuah object
    seperti property dan method
*/
// void tidak bakal me return apa2
// type anotation
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
// let user = new User("Angga");
// console.log(user.name);
// // lebih ringkas
// export class User2 {
//     constructor(public name: string, ) {
//     }
// }
// let user2 = new User2("Roihan");
// console.log(user2.name);
// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
// private = hanya bisa diakses dari class itu sendiri
// super digunakan untuk memanggil parent classnya
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    static getNameRole() {
        return "Awokawok";
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
    set email(value) {
        if (value.length < 10) {
            this._email = "Email salah";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "Admin";
// let admin = new Admin("085123123", "Angga", 18);
// admin.getName();
// admin.getRole();
// admin.setName("Ame");
// admin.phone;
// admin.email = "ame@gmail.com"
// console.log(admin.email);
let admin = Admin.getNameRole();
console.log(admin);
