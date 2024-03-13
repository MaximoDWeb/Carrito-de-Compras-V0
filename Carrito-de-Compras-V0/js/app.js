const frutas = [];

const fruta = prompt('Carrito de Compras  Que fruta desea comprar?');

frutas.push(fruta);

while (confirm('Desea agregar otra fruta al carrito?')) {
    const fruta = prompt('Que otra fruta desea comprar?');
    frutas.push(fruta);
}

console.log('Usted compro: ');

frutas.forEach((fruta, index) => {
    console.log(`${index + 1}: ${fruta}`);
});