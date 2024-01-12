const Prenda = function (id, nombre, precio, marca, cant) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    this.cant = cant;
};

let ropa = [];

/* Fetch en funcion para evitar error */ 

function cargarPrendas() {
    return fetch("prendas.json")
        .then( (res) => res.json())
        .then(data => {
            ropa = data;
            localStorage.setItem("prendas", JSON.stringify(ropa));
        })
        .catch(error => {console.error("No hay nada")});
}

if (localStorage.getItem("prendas")) {
    ropa = JSON.parse(localStorage.getItem("prendas"));
} else {
    cargarPrendas();
}

function filtrarPrendas() {
    const body = document.querySelector("body");
    const input = document.getElementById("filtpre").value;
    const palabra = input.trim().toUpperCase();
    const busqueda = ropa.filter((prenda) => prenda.nombre.toUpperCase().includes(palabra));

    if (busqueda.length > 0) {
        const container = document.createElement("div");
        container.className = "container";

        busqueda.forEach((prenda) => {
            const card = document.createElement("div");
            card.className = "card";

        const id = document.createElement("h2")
        id.textContent = `ID: ${prenda.id}`
        card.appendChild(id)

        const nombre = document.createElement("p")
        nombre.textContent = `Prenda: ${prenda.nombre}`
        card.appendChild(nombre)

        const marca = document.createElement("p")
        marca.textContent = `Marca: ${prenda.marca}`
        card.appendChild(marca)

        const cant = document.createElement("p")
        cant.textContent = `Stock: ${prenda.cant}`
        const inputNuevoCant = document.createElement("input")
        inputNuevoCant.placeholder = "Cantidad";
        const btnNuevoCant = document.createElement("button")
        btnNuevoCant.textContent = "Añadir Stock";
        btnNuevoCant.addEventListener("click", (e) => {
            const nuevoCant = parseInt(inputNuevoCant.value)
            const prendaele = ropa.find( (produc) => produc.id === prenda.id);

            if (prendaele) {
                if (isNaN(nuevoCant)) {
                    Swal.fire({
                        icon: "warning",
                        title: "Ingrese producto",
                        text: "Ponga una cantidad en numeros"
                    });
                    return;
                } 
                else {
                    if (nuevoCant <= 0) {
                        Swal.fire({
                            icon: "error",
                            title: "¡No Robe!",
                            text: "¡Añada o deje el producto en su lugar!"
                        });
                    } 
                    else {
                        prendaele.cant += nuevoCant;
                        Swal.fire({
                            icon: "success",
                            title: "Cambio realizado",
                            text: `Se añadieron ${nuevoCant} ahora hay ${prendaele.cant}`
                        });
                        localStorage.setItem("prendas", JSON.stringify(ropa));

                    }
                }
            } else {
                console.log(`No existe prenda con ID ${prenda.id}`);
            }

        });


        card.appendChild(cant)
        card.appendChild(inputNuevoCant)
        card.appendChild(btnNuevoCant)

        const precio = document.createElement("p")
        precio.textContent = `Precio: $${prenda.precio}`
        const inputNuevoPrecio = document.createElement("input");
        inputNuevoPrecio.placeholder = "Nuevo Precio";
        const btnNuevoPrecio = document.createElement("button");
        btnNuevoPrecio.textContent = "Cambiar Precio";
        btnNuevoPrecio.addEventListener("click",  () => {

            const nuevoPrecio = parseFloat(inputNuevoPrecio.value);

            if (isNaN(nuevoPrecio)) {
                Swal.fire({
                    icon: "warning",
                    title: "Ingrese el precio",
                    text: "Escriba el precio en numeros"
                });;
            } else {
                prenda.precio = nuevoPrecio;
                localStorage.setItem("prendas", JSON.stringify(ropa));
                Swal.fire({
                    icon: "success",
                    title: "Cambio realizado",
                    text: `El precio de ${prenda.nombre} fue modificado a $${nuevoPrecio} con exito`
                });
            }
        });

        
        card.appendChild(precio)
        card.appendChild(inputNuevoPrecio)
        card.appendChild(btnNuevoPrecio)


        container.appendChild(card)

        })

        body.appendChild(container)
    
    
    
    }
    else{
        Swal.fire({
            icon: "error",
            title: "No existe coincidencia",
            text: "no hay resultados para '"+palabra+"'"
        });
    }


}


const botonbuscar = document.getElementById("buscar")
botonbuscar.addEventListener("click", ()=>{filtrarPrendas()})



