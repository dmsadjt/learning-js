const coffee = new Promise();

const executorFunction = (resolve, reject) => {
    const isCoffeMakerReady = true;
    if (isCoffeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}

const makeCoffee = () => {
    return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
console.log(coffeePromise);