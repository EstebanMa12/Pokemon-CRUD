export function enviarDatosPokemon(pokemonInfo,URL) {
    axios.post(URL,pokemonInfo)
    .then(response =>{
        console.log('Datos enviados al servidor:', response.data);
    })
    .catch(error =>{
        console.error("Error al enviar los datos al servidor", error);
    })
}

/* export function enviarDatosPokemon(pokemonInfo, URL) {
    axios.get(URL)
        .then(response => {
            const data = response.data;

            if (Array.isArray(data.pokemons)) {
                const updatedData = {
                    ...data,
                    pokemons: [...data.pokemons, pokemonInfo]
                };

                // Envía el objeto actualizado al servidor
                return axios.put(URL, updatedData);
            } else {
                console.error('La propiedad "pokemons" no es una matriz en la respuesta JSON');
            }
        })
        .then(response => {
            if (response) {
                console.log('Datos actualizados en el servidor:', response.data);
            }
        })
        .catch(error => {
            console.error('Error al actualizar datos en el servidor:', error);
        });
} */