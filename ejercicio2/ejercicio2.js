const img = document.querySelector(".random-image");

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const obtenerPokemon = async (randomPoke) => {
    randomPoke = generarNumeroAleatorio(1,151);
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`);
        const datos = await respuesta.json();
        img.src = datos.sprites.front_default;
    } catch (error) {
        console.error(error);
    }
}

obtenerPokemon();