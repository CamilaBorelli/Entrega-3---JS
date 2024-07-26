const plantas = [
    { id: 1, nombre: "Ficus Pandurata", descripcion: "La Ficus Pandurata, es la reina de las plantas de interior. Su forma es única, con hojas grandes y brillantes. Si tenés un espacio vacío que necesitas llenar con algo que aporte elegancia, esta es la elección perfecta.", precio: 74820, imagen: "planta1.jpg", categoria: "interior" },
    { id: 2, nombre: "Seaphortia", descripcion: "La Palmera Seafortia, también conocida como Archontophoenix cunninghamiana, es una espectacular palmera que aporta un toque tropical a cualquier rincón. Es una de las palmeras más elegidas para el interior de las casas gracias a su elegante porte y sus hojas verde oscuro y brillante.", precio: 21885, imagen: "planta2.jpg", categoria: "interior" },
    { id: 3, nombre: "Palmera Areca", descripcion: "La Palmera Areca prefiere una luz brillante pero indirecta. Es recomendable colocarla en una habitación con mucha luz natural, pero evitar la exposición directa al sol para evitar quemaduras en las hojas.", precio: 70330, imagen: "planta3.jpg", categoria: "exterior" },
    { id: 4, nombre: "Strelitzia Nicolai", descripcion: " Si querés aportar un toque tropical y elegante a tu espacio, la Strelitzia Nicolai es tu planta. Conocida como el ave del paraíso blanco, se destaca por sus grandes hojas verdes y sus flores blancas y azules que asemejan a un ave.", precio: 65120, imagen: "planta4.jpg", categoria: "exterior" }
]

function contenidoPlantas() {
    let informacionPlantas = "";

    for (const planta of plantas) {
        informacionPlantas += `<div class="col-md-3">
            <div class="card border border-success rounded-5 rounded-top-0">
                    <img src="images/${planta.imagen}" class="mt-3" alt="${planta.nombre}">
                </a>
                <div class="card-body text-center">
                    <p class="card-text">${planta.nombre}<br>$${planta.precio} ARS</p>
                    <p class="card-text"><button class="btn btn-outline-success rounded-4" onclick="agregarPlanta(${planta.id});">Añadir al carrito</button></p>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("contenidoHTML").innerHTML = informacionPlantas;
}

function agregarPlanta(id) {
    const planta = plantas.find(item => item.id == id);
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(planta);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    botonCarrito();
}

function eliminarPlanta(id) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoActualizado = carrito.filter(item => item.id != id);
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    contenidoCarrito();
    botonCarrito();
}

function botonCarrito() {
    let total = totalPlantas();
    document.getElementById("totalPlantas").innerHTML = total;
}

function totalPlantas() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    return carrito.length;
}

function eliminarCarrito() {
    localStorage.removeItem("carrito");
    contenidoCarrito();
    botonCarrito();
}

contenidoPlantas();
botonCarrito();

