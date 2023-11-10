const getImagen = async() =>{


    try {
        const apiKey = 'HHkdGMRILhjiaXQhv2D2KQqk3hKKWhJU';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        console.log(url);
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img)
    } catch (error) {
        console.log(error)
    }
   
}

getImagen();

// const apiKey = 'HHkdGMRILhjiaXQhv2D2KQqk3hKKWhJU';

// 
// // https://api.giphy.com/v1/gifs/random?apiKey=HHkdGMRILhjiaXQhv2D2KQqk3hKKWhJU


// peticion
//     .then( resp => resp.json())
//     .then(({data}) => {
//         const {url} = data.images.original;
//         console.log(url)

//         const img = document.createElement('img');
//         img.src=url;
//         document.body.append(img)
//     })
//     .catch(console.warn)