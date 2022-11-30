import { coffeeStock, isCoffeeMachineReady } from './state.js'

console.log(coffeeStock);

const makeCoffee = (type, mg) => {
    if (coffeeStock[type] >= mg && isCoffeeMachineReady) {
        console.log("Success!")
    }
    else {
        console.log("Fail! Retrying...")
        makeCoffee(type, mg -= 10);
    }
}

makeCoffee("arabica", 170);