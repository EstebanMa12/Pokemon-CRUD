import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

export function enviarDatosPokemon(pokemonInfo,URL) {
    axios.post(URL,pokemonInfo)
    .then(response =>{
        console.log('Datos enviados al servidor:', response.data);
    })
    .catch(error =>{
        console.error("Error al enviar los datos al servidor", error);
    })
}
