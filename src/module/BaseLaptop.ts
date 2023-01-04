import ILaptop from "./ILaptop";
import * as Keyboard from "./Keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {
    name: string;
    type: T;
    withKeyboardLed: boolean;
    withTouchButton: boolean;

    constructor(name: string, type: T, keyboardLed: boolean, TouchButton: boolean) {
        this.name = name;
        this.type = type;
        this.withKeyboardLed = keyboardLed;
        this.withTouchButton = TouchButton;
    }
    a(): void{
        console.log(Keyboard.a());
    }
    b(): void {
        console.log(Keyboard.b());
    }
    
}

export default BaseLaptop;