// SELECCIONAR ELEMENTOS
const selectElement = (element) => document.querySelector(element);

// NAV
selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active');
});

document.getElementById('litros').oninput = calcular;
document.getElementById('pGalon').oninput = calcular;

function calcular(){
    let L = document.getElementById('litros').value;
    if (!L) return;
    let PG = document.getElementById('pGalon').value;
    if (!PG) return;
    // conversion a galones
    let TG = (L/3.785).toFixed(2);
    // ganancia
    let GA = (PG * TG).toFixed(2);   
    document.getElementById('galon').value = TG;
    document.getElementById('ganancia').value = GA;
}