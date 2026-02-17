let frutas = ["manzana", "banana", "naranja", "manzana", "pera", "banana"];
let conteoFrutas = {};
let i = 0;

while (i < frutas.length) {
    let fruta = frutas[i];

    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
    i++;
}

console.log("Cantidad de cada tipo de fruta:");
for (let fruta in conteoFrutas) {
    console.log(fruta + ": " + conteoFrutas[fruta]);
}