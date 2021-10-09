// SELECCIONAR ELEMENTOS
const selectElement = (element) => document.querySelector(element);

// NAV
selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active');
});

// RETO 2
let total = 0;
let sencillas = 0;
const btnSencilla = document.getElementById("1");
btnSencilla.addEventListener("click", function () {
    confirmar = confirm(`Seleccionó ${sencillas + 1} hamburguesas sencillas. ¿Desea confirmar el pedido?`);
    if (confirmar) {
        sencillas += 1;
        // alert("Hamburguesa doble añadida al carrito");
    }
});

let dobles = 0;
const btnDoble = document.getElementById("2");
btnDoble.addEventListener("click", function () {
    confirmar = confirm(`Seleccionó ${dobles + 1} hamburguesas dobles. ¿Desea confirmar el pedido?`);
    if (confirmar) {
        dobles += 1;
    }
});

let triples = 0;
const btnTriple = document.getElementById("3");
btnTriple.addEventListener("click", function () {
    confirmar = confirm(`Seleccionó ${triples + 1} hamburguesas triples. ¿Desea confirmar el pedido?`);
    if (confirmar) {
        triples += 1;
    }
});

let cargo=0;
function comprar() {
    total = sencillas * 20 + dobles * 25 + triples * 28;
    let check = document.getElementById("tarjeta");
    if (check.checked){ 
        cargo = (total*0.05).toFixed(2); 
        total = (Number(cargo)+Number(total)).toFixed(2);
    };
    alert(`
    «El náufrago satisfecho»
    Gracias por su compra
      ${sencillas} Sencillas --- $${sencillas * 20}
      ${dobles}  Dobles   --- $${dobles * 25}
      ${triples}  Triples    --- $${triples * 28}
      5%      --------$${cargo}
      TOTAL -------- $${total}
    `);
};




