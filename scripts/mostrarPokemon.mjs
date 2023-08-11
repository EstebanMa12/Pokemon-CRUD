import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

export function mostrarPokemon(poke) {
    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let pokeId = poke.id.toString().padStart(3, '0');

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = /* html */`
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weight}kg</p>
            </div>
            <button type="button" class="select_Button" id="${pokeId}">Capture</button>
        </div>
    `;
    listaPokemon.append(div);
}

export function mostrarMisPokemon(pokemons) {
    const titulo = document.createElement("h1");
    titulo.textContent = "My Pokemon List";
    listaPokemon.append(titulo);

    for (const pokemon of pokemons) {
        let tipos = pokemon.type.map((type) => `<p class="${type} tipo">${type}</p>`);
        tipos = tipos.join('');

        const div = document.createElement("div");
        div.classList.add("pokemon");
        div.innerHTML = `
            <p class="pokemon-id-back">#${pokemon.id}</p>
            <div class="pokemon-imagen">
                <img src="${pokemon.img}" alt="${pokemon.name}">
            </div>
            <div class="pokemon-info">
                <div class="nombre-contenedor">
                    <p class="pokemon-id">#${pokemon.id}</p>
                    <h2 class="pokemon-nombre">${pokemon.name}</h2>
                </div>
                <div class="pokemon-tipos">
                    ${tipos}
                </div>
                <div class="pokemon-stats">
                    <p class="stat">${pokemon.stats[0]}m</p>
                    <p class="stat">${pokemon.stats[1]}kg</p>
                </div>
                <button type="button" class="edit_Button" pokemon-id="${pokemon.id}">Edit</button>
                <button type="button" class="delete_Button" pokemon-id="${pokemon.id}">Delete</button>
            </div>
            <div class="edit-form" style="display: none;">
                <h3>Edit Pokémon</h3>
                <label for="height">Height:</label>
                <input type="number" id="height">
                <label for="weight">Weight:</label>
                <input type="number" id="weight">
                <button type="button" class="save_Button" pokemon-id="${pokemon.id}">Save</button>
            </div>
        `;

        const editButton = div.querySelector('.edit_Button');
        const editForm = div.querySelector('.edit-form');
        const heightInput = editForm.querySelector('#height');
        const weightInput = editForm.querySelector('#weight');
        const saveButton = editForm.querySelector('.save_Button');

        editButton.addEventListener('click', () => {
            editForm.style.display = 'block';
            heightInput.value = pokemon.stats[0];
            weightInput.value = pokemon.stats[1];
        });

        saveButton.addEventListener('click', async (event) => {
            event.preventDefault();
            const newHeight = heightInput.value;
            const newWeight = weightInput.value;

            // Actualizar los valores en el objeto `pokemon`
            pokemon.stats[0] = newHeight;
            pokemon.stats[1] = newWeight;

            // Enviar los nuevos valores al servidor
            try {
                const response = await axios.put(`http://localhost:3000/pokemons/${pokemon.id}`, pokemon);
                console.log('Datos actualizados:', response.data);
            } catch (error) {
                console.error('Error al actualizar los datos:', error);
            }
        });

        listaPokemon.append(div);
    }
}
