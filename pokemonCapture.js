
export function capturarPokemon(url, id) {
    const URL = url + String(Number(id));
    
    return axios.get(URL)
        .then(response => response.data)
        .then(data => {
            let img = data.sprites.other["official-artwork"].front_default;
            let name = data.name;
            let type = data.types.map(tipo => tipo.type.name);
            let stats = [data.height, data.weight];
            return {
                img: img,
                name: name,
                type: type,
                stats: stats
            };
        })
        .catch(error => {
            console.error('Error al capturar el Pokémon:', error);
            return null; // Manejo del error, devuelve null o algún valor de error adecuado
        });
}