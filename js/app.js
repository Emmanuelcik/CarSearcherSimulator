//Variables
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");
const max = new Date().getFullYear();
const min = max - 10;


//Eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos();

    llenarAutos(); //Genera los años del select
})


//fuinciones
function mostrarAutos() {
    
    autos.forEach ( a => {
        const {marca, modelo, year, puertas, transmision, precio, color} = a; 
        const auto = document.createElement("P");

        auto.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} puertas - Transmisión: ${transmision} - Precio: ${precio}$ - Color: ${color}
        `;

        //Insertar en HTML
        resultado.appendChild(auto);
    })
}

function llenarAutos () {
    for ( let i = max; i >= min; i--){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}