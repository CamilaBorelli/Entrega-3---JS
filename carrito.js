function contenidoCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let informacionPlantas;

    if (totalPlantas() > 0) {
        informacionPlantas = `<table class="table">
    <tbody>
    <tr>
    <td class="text-end" colspan="4"><button class="btn btn-outline-success rounded-4 btn-sm" onclick="eliminarCarrito();"> Eliminar Carrito <i class="bi bi-trash"></i></button></td>
    </tr>`;

        for (const planta of carrito) {
            informacionPlantas += `<tr>
        <td><img src="images/${planta.imagen}" alt="${planta.nombre}" width="96"></td>
        <td class="table table-striped align-middle">${planta.nombre}</td>
        <td class="table table-striped text-center align-middle"><span>$${planta.precio} ARS</span></td>
        <td class="table table-striped text-end align-middle"><button class="btn btn-outline-success rounded-4 btn-sm" onclick="eliminarPlanta(${planta.id});"><i class="bi bi-trash"></i></button></td>
        </tr>`;
        }
        informacionPlantas += `</tbody>
</table>`;
    } else {
        informacionPlantas = `<div class="align-items-center alert alert-success" role="alert">
       <h4 <i class="bi bi-cart-dash align-items-center"></i>El carrito está vacío </h4>
      </div>`;
    }
    document.getElementById("contenidoHTML").innerHTML = informacionPlantas;
}

const boton = document.getElementById('finalizarCompra');

boton.addEventListener('click', function () {
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Para finalizar tu compra debes registrarte!",
        footer: '<a href="registro.html">¡ME QUIERO REGISTRAR!</a>'
    });

    localStorage.removeItem("carrito");
});

contenidoCarrito();