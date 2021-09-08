//Variables
const resultado = document.querySelector("#resultado");



//Eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos();
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