let url ='https://pokeapi.co/api/v2/pokemon';
let pikachu = 
let 

fetch(url)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) =>{
            console.log(data);
            getPoke(data);
        })
        .catch((err) => console.log(err)); 

    function getPoke(originalPoke){
        console.log(originalPoke);



    }

