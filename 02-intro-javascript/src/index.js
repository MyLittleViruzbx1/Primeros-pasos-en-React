import { heroes} from '../src/data/heroes';


// const getHeroesById = (id) =>{

//     return heroes.find( heroe =>{
//         if(heroe.id === id){
//             return heroe.name
//         }else {
//             return false;
//         }
//     });
// }

const getHeroesById = (id) =>{

    return heroes.find( heroe => heroe.id === id);
        
}


console.log(getHeroesById(2))


const getHeroesByOwner = ( owner) => heroes.filter( heroes => heroes.owner === owner);

console.log(getHeroesByOwner('DC'))
