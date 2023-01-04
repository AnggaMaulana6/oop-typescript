export default interface ILaptop<T> {
    name: string;
    type: T,
    withKeyboardLed: boolean;
    withTouchButton: boolean;
}