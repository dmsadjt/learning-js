const [checkAvailability, checkStock, brewCoffee] = require('./3');

const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 1000) {
                resolve("Kopi didapatkan!");
            }
            else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }

}

async function makeEspressos() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

// makeCoffee();
makeEspressos();
