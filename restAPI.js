import { mostrarPokemon } from "./mostrarPokemon.js";

console.log('Hola mundo');

const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
//const captureBotom = document.querySelectorAll(".select_Button")
/* const botonesHeader = document.querySelectorAll(".btn-header"); */
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
    axios.get(URL + i)
        .then(response=> response.data)
        .then(data => mostrarPokemon(data))
        .catch(error=> console.error(error));
}

botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";
    for (let i = 1; i <= 151; i++) {
        axios.get(URL + i)
            .then((response) => response.data)
            .then(data => {

                if(botonId === "ver-todos") {
                    mostrarPokemon(data);
                } else {
                    const tipos = data.types.map(type => type.type.name);
                    if (tipos.some(tipo => tipo.includes(botonId))) {
                        mostrarPokemon(data);
                    }
                }

            })
            .catch(error => console.error(error));
    }
}))

// Seleccionar todos los botones de captura y agregar event listeners
const captureButtons = document.querySelectorAll(".select_Button");
captureButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("Captura Hecha");
        const pokemonContainer= button.closest('.pokemon')
        console.log(pokemonContainer);

    });
});



