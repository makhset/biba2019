
let number = parseInt(prompt("Кез келген санды енгізіңіз:"));
for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
    if (i % 2 === 0) {
        console.log("Цикл тоқтатылды, себебі жүп сан табылды:", i);
        break;
    }
}