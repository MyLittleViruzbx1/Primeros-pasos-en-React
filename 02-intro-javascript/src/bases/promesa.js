import { getHeroesById } from '../src/bases/importaciones'

//promesas
const promesa = new Promise((resolve, reject) =>{

    setTimeout( () =>{
        const heroe = getHeroesById(2);
        console.log(heroe);
    },1500);
});

promesa.then( () =>{

    console.log('Then de la promesa')

})