import axios from "axios";

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

export function mostrarMisPokemon(pokemons){
        for (const pokemon of pokemons){
            let tipos = pokemon.type.map((type) => `<p class="${type} tipo">${type}</p>`);
            tipos = tipos.join('');
            const div = document.createElement("div");
            div.classList.add("pokemon");
            div.innerHTML =/* html */ `
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
                <button type="button" class="edit_Button" >Edit</button>
                <button type="button" class="edit_Button" >Delete</button>
            </div>`
        listaPokemon.append(div);
        }
} 
    
