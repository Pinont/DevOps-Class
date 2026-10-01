function hello() {
    console.log("Hello, world!");
}

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    return a / b;
}

export const utils = {
    hello,
    add,
    subtract,
    multiply,
    divide
};
