

const personajes =['Goku', 'Vegeta', 'Trunks'];

const [,p1] = personajes;

const retornaArreglo = () =>{
    return ['ACV',321];
}



const onlyUseState = (valor) =>{
    return [valor, ()=> console.log('Hola mundo')]
}

const arr = onlyUseState( 'Goku')

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)
console.log(p1)
console.log(onlyUseState)


const [nombre, setNombre] = onlyUseState('Goku');

console.log(nombre);

setNombre();