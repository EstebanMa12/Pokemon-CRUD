import { mostrarPokemon } from "./mostrarPokemon.js";

const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
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