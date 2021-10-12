let listaPlatillos = [
    {
        id: 1,
        nombre: "Crema de Verduras",
        descripcion: "Suave crema preparada con una variedad de verduras estacionales",
        precio: 12.0,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80z",
    },
    {
        id: 2,
        nombre: "Albondigas en salsa BBQ",
        descripcion:
            "Albondigas de carne de res condimentandas con finas hierbas acompañadas con Salsa BBQ y espinacas",
        precio: 18.0,
        stock: 8,
        imagen: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    },
    {
        id: 3,
        nombre: "Hamburguesa Royal",
        descripcion: "Carne, Queso, Huevo y tomate, todo envuelto con pan",
        precio: 11.0,
        stock: 14,
        imagen: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 4,
        nombre: "Pizza de la casa",
        descripcion: "Pizza con receta original de la casa",
        precio: 14.0,
        stock: 7,
        imagen: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 5,
        nombre: "Ceviche de la casa",
        descripcion: "Plato Bandera Peruano acompañado con bebida a elección",
        precio: 20.0,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 6,
        nombre: "Ramen Fusión",
        descripcion: "Ramen preparado con ingredientes Peruanos",
        precio: 19.0,
        stock: 6,
        imagen: "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    },
];

/**REQUERIDA
 * 1. mostrar estos platillos de forma identica a como lo hace preview
 *
 * //ESTO ES OPCIONAL, aqui tendrías que investigar
 * 2. OPCIONAL (cuando de click en el boton agregar hacer que eso se sume al carrito)
 * 	-tips getElementsByClassName, y pueden agregar attributos adicionales
 * 3. OPCIONAL (mostrar el resumen del carrito en la parte izquierda)
 * 4. OPCIONAL (guardar el resumen en el LocalStorage)
 */

//lo ponen el discord

let divContenido = document.getElementById("contenido");
let carrito = [];
function crearTarjetas() {
    let tarjetas = "";
    listaPlatillos.forEach(function (platillo) {
        tarjetas = tarjetas + ` <div class="tarjeta">
                                    <div class="imagen">
                                     <img src="${platillo.imagen}" />
                                    </div>
                                        <div class="texto">
                                        <h4>${platillo.nombre}</h4>
                                        <p>${platillo.descripcion}</p>
                                        <div class="precio">
                                            <span>S/.${platillo.precio}</span>
                                            <button class="btn-agregar" id="${platillo.id}">Agregar</button>
                                        </div>
                                    </div>
                                </div>`
    });
    divContenido.innerHTML = tarjetas;
};
crearTarjetas();

let btnAgregar = document.querySelectorAll(".btn-agregar");
btnAgregar.forEach(function (boton) {
    boton.addEventListener("click", function () {
        let id = +boton.getAttribute("id");
        let platoSelected = listaPlatillos.find(plato => plato.id === id);
        AgregaraCarrito(platoSelected);
    });
});
let total=0;
function AgregaraCarrito(plato) {
    let cantidad=1;
    let subtotal = 0;

    if (plato.stock > 0) {
        plato.stock -= 1;

        if(carrito.find(x=>x.id===plato.id)){
            let item = carrito.find(x=>x.id===plato.id);
            let i = carrito.indexOf(item);
            cantidad=carrito[i].cantidad;
            carrito[i].cantidad=cantidad+1;
            carrito[i].subtotal=carrito[i].cantidad*plato.precio;
            total += plato.precio;
         }
        else{
            subtotal = plato.precio;
            carrito.push({id:plato.id, item:plato.nombre, cantidad:cantidad, PUnit:plato.precio, subtotal:subtotal});
            total += subtotal;
        }
            let tbody = document.getElementById("tbody-carrito");
            let items ="";
            carrito.forEach(function(item){
                items = items +`<tr>
                                <th>${item.item}</th>
                                <th id="cantidad">${item.cantidad}</th>
                                <th>${item.PUnit}</th>
                                <th id="subtotal">${item.subtotal}</th>
                            </tr>
                `;
            });
            tbody.innerHTML = items;   
            let  resumen = document.getElementById("total");
            resumen.innerHTML = total;
    }
    else {
        alert(`${plato.nombre} ya no se encuentra disponible. Por favor, seleccione otro platillo.`);
    }
};