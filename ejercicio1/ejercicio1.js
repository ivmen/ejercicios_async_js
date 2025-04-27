const select = document.querySelector("#character-list");
const img = document.querySelector(".character-image");

async function obtenerDatos() {
    const res = await fetch("https://thronesapi.com/api/v2/Characters");
    const datos = await res.json();

    datos.forEach(character => {
        const option = document.createElement("option");
        option.value = character.imageUrl;
        option.textContent = character.fullName;
        select.appendChild(option);
    });

    if(datos.length > 0){
        img.src = datos[0].imageUrl;
        select.value = datos[0].imageUrl;
    }
    
    select.addEventListener("change", (event) => {
        img.src = event.target.value;
    })
}

obtenerDatos();