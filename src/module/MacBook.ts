import Laptop from "./BaseLaptop"

class MacBook<T> extends Laptop<T> {
    constructor(type: T, keyboardLed: boolean, TouchButton: boolean){
        super("MacBook", type, keyboardLed, TouchButton)
    }
}

export default MacBook;