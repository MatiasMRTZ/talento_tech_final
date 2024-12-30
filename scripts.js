const cursos = [
    {
        nombre: "Guitarra",
        imagen: "img/guitarra.JPG",
        precio: 2200
    },
    {
        nombre: "Saxofon",
        imagen: "img/saxofon.JPG",
        precio: 3000
    },
    {
        nombre: "Violin",
        imagen: "img/violin.JPG",
        precio: 2800
    },
    {
        nombre: "Bateria",
        imagen: "img/bateria.JPG",
        precio: 3200
    },
    {
        nombre: "Canto",
        imagen: "img/canto.JPG",
        precio: 3400
    },
    {
        nombre: "Piano",
        imagen: "img/piano.JPG",
        precio: 3000
    }
]

let cursosHTML = "";

for(let indice = 0; indice < cursos.length; indice++){

    cursosHTML += `
                <div class="curso">
                    <img src=${cursos[indice].imagen}
                    <div class="curso-contenido">
                        <h2>${cursos[indice].nombre}</h2>
                        <h3>precio: $${cursos[indice].precio}</h3>
                        <input class="boton-agregar-carrito" type="button" value="Agregar al carrito">
                    </div>
                </div>
    `;
}
console.log(cursosHTML);

const contenedorCursos = document.getElementById("contenedorCursos");
contenedorCursos.innerHTML = cursosHTML;

const botonAgregar = document.querySelectorAll(".boton-agregar-carrito");
console.log(botonAgregar);

const listaCarrito = document.querySelector("#carrito ul");
console.log(listaCarrito);

const totalCarrito = document.querySelector("#carrito p");
console.log(totalCarrito);

let totalAPagar = 0;

for(let indice = 0; indice < botonAgregar.length; indice++){
    
    function agregarElemCarrito(){
        console.log("click " + indice)
        const elementoLi = document.createElement("li");

        elementoLi.innerText = `curso ${cursos[indice].nombre} $${cursos[indice].precio}`

        listaCarrito.appendChild(elementoLi)

        totalAPagar += cursos[indice].precio;

        totalCarrito.innerText= "Total a pagar: $" + totalAPagar;
    }

    botonAgregar[indice].addEventListener("click", agregarElemCarrito)
}

const botonBorrar = document.querySelector("#boton-borrar");

function borrarCarrito(){
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a pagar: $0";
    totalAPagar = 0;
}

botonBorrar.addEventListener("click", borrarCarrito);

