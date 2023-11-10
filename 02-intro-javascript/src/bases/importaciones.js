import heroes, { owners} from '../data/heroes';

const getHeroesByIdAsync = (id) =>{

    
   return new Promise( (resolve, reject) =>{
        
        setTimeout(() =>{
            const p1 = getHeroesById(id);
            if(p1){
                resolve(p1);
            }else{
                reject('No se pudo encontrar el heroe');
            }
        },1500);
        
    });
}

export const getHeroesById = (id) =>{

    return heroes.find( heroe => heroe.id === id);

}

// console.log(getHeroesById(2))
// console.log(owners)
export const getHeroesByOwner = ( owner) => heroes.filter( heroes => heroes.owner === owner);

// console.log('+===============================')

// promesa.then( heroe =>{
//     console.log('heroe',heroe)
// })
// .catch( err =>{
//     console.log(err)
// })
// console.log(getHeroesByOwner('DC'))


getHeroesByIdAsync(14).then( console.log())
//     .catch( err =>{
//         console.log(err);
// })
.catch( console.warn)


