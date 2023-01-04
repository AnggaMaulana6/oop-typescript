import Laptop from "./BaseLaptop"

class Lenovo<T> extends Laptop<T> {
    constructor(type: T, keyboardLed: boolean, TouchButton: boolean){
        super("Lenovo", type, keyboardLed, TouchButton)
    }
}

export default Lenovo;