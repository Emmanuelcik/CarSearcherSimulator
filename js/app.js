//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximmo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con los datos de la busqueda
const datosBusqueda = {
    marca: "",
    year: "",
    min: "",
    max: "",
    puertas: "",
    transmision: "",
    color: "",
}

//Eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos);

    llenarAutos(); //Genera los años del select
})
//Evetos para select de forms
marca.addEventListener("change", (e) =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
    
});
year.addEventListener("change", (e) =>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
minimo.addEventListener("change", (e) =>{
    datosBusqueda.min = e.target.value;
    
});
maximo.addEventListener("change", (e) =>{
    datosBusqueda.max = e.target.value;
    
});
puertas.addEventListener("change", (e) =>{
    datosBusqueda.puertas = e.target.value;
    
});
transmision.addEventListener("change", (e) =>{
    datosBusqueda.transmision = e.target.value;
    
});
color.addEventListener("change", (e) =>{
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
});


//fuinciones
function mostrarAutos(autos) {
    limpiarHTML();
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
//LIMPIAR HTML
function limpiarHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarAutos () {
    for ( let i = max; i >= min; i--){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}
// function filtrarAuto() {
//     const resultado = autos.filter(  (a) => {
//         if (datosBusqueda.marca){
//             return a.marca === datosBusqueda.marca;
//         }else {
//             return a;
//         }
//     } );
//     console.log(resultado)
// }
//funcion que filtra en base al la busqueda
function filtrarAuto() {
    const resultado = autos.filter(  filtrarMarca ).filter(filtrarYear); 
    // console.log(resultado);
    mostrarAutos(resultado);
}

function filtrarMarca(a){
    const {marca} = datosBusqueda;
    if( marca ){
        return a.marca === marca;
    } 
    return a;
};

function filtrarYear (a) {
    const {year} = datosBusqueda;
    if( year ){
        return a.year === year;
    } 
    return a;
}