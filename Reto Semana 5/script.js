// let arrJuegos = [
//     {
//       nombre: "The Witcher 3",
//       precio: 60,
//     },
//     {
//       nombre: "Doom",
//       precio: 50,
//     },
//     {
//       nombre: "Among Us",
//       precio: 30,
//     },
//     {
//       nombre: "Bloodborne",
//       precio: 90,
//     },
//     {
//       nombre: "Resident Evil",
//       precio: 120,
//     },
//     {
//       nombre: "Civilization VI",
//       precio: 45,
//     },
//   ];
//   // preguntar presupuesto, para ofrecerle videojuegos a su alcance
//   // carrito
//   let presupuesto = +prompt("Ingrese presupuesto: ");
//   function revisarPresupuesto() {
//     let JuegosComprables = [];
  
//     for (let i = 0; i < arrJuegos.length; i++) {
//       if (presupuesto >= arrJuegos[i].precio) {
//         JuegosComprables.push(arrJuegos[i]);
//       }
//     }
//     return JuegosComprables;
//   }
  
//   function agregarACarrito(listaJuegos) {
//     let carrito = [];
//     for (let i = 0; i < listaJuegos.length; i++) {
//       let compra = confirm(`Deseas comprar ${listaJuegos[i].nombre}?`);
//       if (compra == true) {
//         if (presupuesto < listaJuegos[i].precio) {
//           console.log(`Lo siento, no te alcanza el dinero para comprar ${listaJuegos[i].nombre}`);
//           continue;
//         }
//         carrito.push(listaJuegos[i]);
//         presupuesto = presupuesto - listaJuegos[i].precio;
//       }
//     }
//     return carrito;
//   }
  
//   let listaComprables = revisarPresupuesto();
//   console.table(listaComprables);
  
//   let miCarrito = agregarACarrito(listaComprables);
  
//   console.log("Haz comprado: ");
//   console.table(miCarrito);
//   console.log(`Tu vuelto es: ${presupuesto}`);