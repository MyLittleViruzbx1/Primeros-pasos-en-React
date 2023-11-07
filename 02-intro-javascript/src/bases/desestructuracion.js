//desestructuracion
//Asignacion desestructurante


const persona = {
    nombre: 'maik',
    edad: 21,
    clave: "passwordIron",
    rango:"teniente"
}

const { nombre } = persona;


console.log(nombre)

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const usemachine = ({clave, nombre, edad, rango="capy"}) =>{

    // const { nombre,edad,clave } = usuario;
    console.log(edad, nombre, rango);

    
    return {
        nombreClave: clave,
        anios:edad,
        latlng: {
            lat: 12.2121,
            lng: -12.546
        }
    }
    
}


const avenger = usemachine(persona);

const {nombreClave, anios, latlng:{lat,lng}} = avenger;

console.log(nombreClave, anios);
console.log(lat, lng)