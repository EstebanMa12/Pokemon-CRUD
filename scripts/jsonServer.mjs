import axios from "axios";

export function enviarDatosPokemon(pokemonInfo,URL) {
    axios.post(URL,pokemonInfo)
    .then(response =>{
        console.log('Datos enviados al servidor:', response.data);
    })
    .catch(error =>{
        console.error("Error al enviar los datos al servidor", error);
    })
}
