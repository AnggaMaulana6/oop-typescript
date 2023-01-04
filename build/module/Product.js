"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Lenovo_1 = __importDefault(require("./Lenovo"));
const MacBook_1 = __importDefault(require("./MacBook"));
let lenovo = new Lenovo_1.default("IdeaPad", true, true);
lenovo.b();
console.log(lenovo);
let macbook = new MacBook_1.default(2016, false, false);
macbook.a();
console.log(macbook);
