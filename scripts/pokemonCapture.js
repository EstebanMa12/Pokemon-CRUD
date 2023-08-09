
/* export function capturarPokemon(url, id) {
    const URL = url + String(Number(id));
    
    return axios.get(URL)
        .then(response => response.data)
        .then(data => {
            let pokeId = data.id.toString().padStart(3, '0');
            let img = data.sprites.other["official-artwork"].front_default;
            let name = data.name;
            let type = data.types.map(tipo => tipo.type.name);
            let stats = [data.height, data.weight];
            return {
                id:pokeId,
                name: name,
                type: type,
                stats: stats,
                img: img,
            };
        })
        .catch(error => {
            console.error('Error al capturar el Pokémon:', error);
            return null; // Manejo del error, devuelve null o algún valor de error adecuado
        });
} */

export async function capturarPokemon(url, id) {
    try {
        const URL = url + String(Number(id));
        const response = await axios.get(URL);
        const data = response.data;

        if (!data) {
            throw new Error('Respuesta vacía o inválida');
        }

        let pokeId = data.id.toString().padStart(3, '0');
        let img = data.sprites.other["official-artwork"].front_default;
        let name = data.name;
        let type = data.types.map(tipo => tipo.type.name);
        let stats = [data.height, data.weight];

        return {
            id: pokeId,
            name: name,
            type: type,
            stats: stats,
            img: img,
        };
    } catch (error) {
        console.error('Error al capturar el Pokémon:', error.message);
        return null; // o un valor de error adecuado
    }
}

