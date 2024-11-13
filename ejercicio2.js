"use strict";
// Acceder a los elementos por su id
const producto = document.getElementById("producto");
const cantidad = document.getElementById("cantidad");
const precioUnitario = document.getElementById("precio-unitario");
const descuento = document.getElementById("descuento");
const agregarLinea = document.getElementById("agregarLinea");

// Función que se ejecuta al pulsar el botón "Agregar"
function agregarProducto() {
    const valorProducto = producto.value;
    const valorCantidad = cantidad.value;
    const valorPrecioUnitario = precioUnitario.value;
    const valorDescuento = descuento.value;

    // Mostrar valores por consola
    console.log("Producto:", valorProducto);
    console.log("Cantidad:", valorCantidad);
    console.log("Precio unitario:", valorPrecioUnitario);
    console.log("Descuento:", valorDescuento);
}

// Añadir el evento al botón
agregarLinea.addEventListener("click", agregarProducto);
