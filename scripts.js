//contador ded clics

let contadorClics = 0; //declaro variable en cero

function aumentarContador(){ //funcion que aumenta clics
    contadorClics++;
    console.log("Numero de clics: "+ contadorClics);
}

document.getElementById("miBoton").addEventListener("click", aumentarContador);

// muestra mensajes aleatorios al hacer hover sobre el mensaje 

const mensajes = [ //array con mensajes

    "Hola JavaScript es muy divertido",
    "Por eso estoy aprendiendo",
    "Con estos ejercicios tan chidos!"
];

function mostrarMensajeAleotorio(){ //funcion mensajes aleatorios 

    const indiceAleatorio  = Math.floor(Math.random() * mensajes.length); //mathfloor me redondea el resultado de mathrandom * la longitud del array
    const mensajeSeleccionado = mensajes[indiceAleatorio];
    console.log(mensajeSeleccionado);
}

document.getElementById("elementoHover").addEventListener("mouseover", mostrarMensajeAleotorio);

//Me muestra el doble de la tecla presionada

function mostrarDoble(event){

    const teclaPresionada = event.key;

    if(!isNaN(teclaPresionada) && teclaPresionada !== ''){

        const numero = Number(teclaPresionada);

        const doble = numero*2;

        console.log(`Doble de ${numero} es: ${doble}`);
    }
}

document.addEventListener('keydown', mostrarDoble);

//funcion para sumar un arreglo de números aleatorios


function sumaNumAleatorios(cantidad, min, max){
    
    let suma = 0;

    for(let i=0; i<cantidad; i++){

        const numerosAleatorios= Math.floor(Math.random() * (max - min + 1))+ min;

        suma += numerosAleatorios;
    }

    console.log(`La suma de ${cantidad} numeros aleatorios es : ${suma}`);
}

sumaNumAleatorios(9,1,10);


//Lista 

// Inicializar la lista de compras con al menos 5 productos
const listaDeCompras = ["Manzanas", "Pan", "Leche", "Huevos", "Cereal"];

// Función para agregar un producto a la lista
function agregarProducto(producto) {
    listaDeCompras.push(producto);
    mostrarLista(); // Mostrar la lista actualizada
}

// Función para eliminar un producto de la lista
function eliminarProducto(producto) {
    const indice = listaDeCompras.indexOf(producto);
    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
        mostrarLista(); // Mostrar la lista actualizada
    } else {
        console.log(`El producto "${producto}" no se encuentra en la lista.`);
    }
}

// Función para mostrar la lista de compras en la consola
function mostrarLista() {
    console.log("Lista de Compras Actualizada:");
    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
}

// Ejemplos de uso
mostrarLista(); // Mostrar la lista inicial

// Agregar productos
agregarProducto("Yogur");
agregarProducto("Tomates");

// Eliminar productos
eliminarProducto("Pan");
eliminarProducto("Leche");