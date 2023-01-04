// tipe data pada balikan function

function getName(): string {
    return "Angga Maulana Efendi";
}

console.log(getName());


function getAge(): number {
    return 18;
}

console.log(getAge());

function printName(): void {
    console.log("Print name");
}

printName();

// argument types

function multiply(val1 : number, val2 : number): number {
    return val1 * val2;
}

const result = multiply(6, 14)
console.log(result);

// function as type

type Tambah = (val1 : number, val2 : number) => number;

const add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}
console.log(add(6, 14));

// default parameters

const fullName = (first: string, last: string = "Efendi"): string =>{
    return first + " " +last
}
console.log(fullName("Angga"));

// optional parameter
const getUmur = (val1: string, val2?: string): string => {
    return val1 + " " + val2
}
console.log(getUmur("A"));

const tambah = (val1: number, val2?: number): string => {
    return val1+ " " + val2;
}

console.log(tambah(1));

