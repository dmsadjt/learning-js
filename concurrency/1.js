console.log("Selamat Datang!")
setTimeout(() => {
    console.log("Terima kasih telah mampir!?"), 3000
})
console.log("Ada yang bisa dibantu?")

const orderCoffee = callback => {
    let coffee = null
    console.log("Sedang membuat kopi, silahkan tunggu...")
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}

orderCoffee(coffee => {
    console.log(coffee);
});