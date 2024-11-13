"use strict";
// Acceder a los elementos por su id
const cuerpoTabla = document.getElementById("cuerpo-tabla");
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

    // Crear una nueva fila
    const nuevaFila = document.createElement("tr");

    // Crear celdas y añadir los valores
    nuevaFila.innerHTML = `
        <td>${valorProducto}</td>
        <td>${valorCantidad}</td>
        <td>${valorPrecioUnitario}</td>
        <td>${valorDescuento}</td>
        <td><button class="btn btn-success">Agregar</button></td>
    `;

    // Añadir la nueva fila al cuerpo de la tabla
    cuerpoTabla.appendChild(nuevaFila);

    // Limpiar los inputs después de añadir la fila
    producto.value = "";
    cantidad.value = "";
    precioUnitario.value = "";
    descuento.value = "";

    // Mostrar valores por consola para verificar
    console.log("Producto:", valorProducto);
    console.log("Cantidad:", valorCantidad);
    console.log("Precio unitario:", valorPrecioUnitario);
    console.log("Descuento:", valorDescuento);
}

// Añadir el evento al botón
agregarLinea.addEventListener("click", agregarProducto);
