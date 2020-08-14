let url ='https://pokeapi.co/api/v2/pokemon/pikachu';



let pikachuAbilityId = document.getElementById('pikachuAbility');
// console.log(pikachuAbilityId)

let pikachuAbility;
let pikachuAbility2;
let pikachuAbility3;


let pikachuHeightId = document.getElementById('pikachuHeight');

let pikachuHeight;


let pikachuWeightId = document.getElementById('pikachuWeight');

let pikachuWeight;


let pikachuPictureId = document.getElementById('pikachuPicture')

let pikachuPicture;



 

fetch(url)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) =>{
            console.log(data);
            ability(data);
        })
        .catch((err) => console.log(err)); 

    

function ability(pikachu){ // works
    console.log(pikachu);
    pikachuAbility=pikachu.moves[0].move.name; //works
    pikachuAbility2=pikachu.moves[1].move.name;
    pikachuAbility3=pikachu.moves[2].move.name;
    // console.log(pikachuAbility);
    pikachuHeight=pikachu.height; //works
    // console.log(pikachuHeight); 
    pikachuWeight=pikachu.weight; //works
    // console.log(pikachuWeight);
    pikachuPicture=pikachu.sprites.front_default;//works
    // console.log(pikachuPicture);
    pikachuAbilityId.innerText = ` ${pikachuAbility}, ${pikachuAbility2}, and ${pikachuAbility3}`;
    pikachuHeightId.innerText= `${pikachuHeight} feet tall` ;
    pikachuWeightId.innerText = `${pikachuWeight} lbs`;
    pikachuPictureId.src=pikachuPicture



    
   
   
    // let pikachuAbilityId = document.createElement('p');//works
    // // console.log(pikachuAbilityId);
    // pikachuAbilityId.innerText=pikachuAbility;//works
    // // console.log(pikachuAbilityId);
    // // pikachuAbilityId.appendChild(pikachuAbility);
    

}

ability();

function caught(){
    alert('You are the Poke master, you caught Pikachu')
}

     //create variable with create element method
     //store pikachu data into new variable 
     //appendChild

    //  console.log(pikachuAbilityId);
    //  pikachuAbilityId.textContent= pikachuAbility;
    //  pikachuAbilityId.appendChild(pikachuAbility);
    //  squirtleAbilityId.appendChild(squirtleAbility);
    //  charizardAbilityId.appendChild(charizardAbility);