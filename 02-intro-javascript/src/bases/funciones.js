// funciones en js

function saludar (nombre){
    return `Hola, ${nombre}`;
}

console.log(saludar('milo'))



const getUser = () =>( {
        uid: 'A123',
        username: 'Elmo'
    })

const user = getUser();

console.log(user)



const  getUsuarioActivo = (nombre) =>({
        iud: 'b123',
        ussername: nombre
    })

const usuarioActivo = getUsuarioActivo('gambito');
console.log(usuarioActivo)