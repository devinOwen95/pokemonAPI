let url ='https://pokeapi.co/api/v2/pokemon';
const pikachuUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";
const charizardUrl = "https://pokeapi.co/api/v2/pokemon/charizard";
const squirtleUrl = "https://pokeapi.co/api/v2/pokemon/squirtle";


const pikachuAbilityId = document.getElementById('pikachuAbility').innerText
const charizardAbilityId =document.getElementById('charizardAbility').innerText
const squirtleAbilityId =document.getElementById('squirtleAbility').innerText
let pikachuAbility;
let squirtleAbility;
let charizardAbility;
// const bulbasaurAbility =document.getElementById('bulbasaurAbility')
// const pidgeottoAbility =document.getElementById('pidgeottoAbility')
// const butterfreeAbility =document.getElementById('butterfreeAbility')

const pikachuHeightId = document.getElementById('pikachuHeight').innerText
const charizardHeightId =document.getElementById('charizardHeight').innerText
const squirtleHeightId =document.getElementById('squirtleHeight').innerText
let pikachuHeight;
let charizardHeight;
let squirtleHeight;
// const bulbasaurHeight =document.getElementById('bulbasaurHeight')
// const pidgeottoHeight =document.getElementById('pidgeottoHeight')
// const butterfreeHeight =document.getElementById('butterfreeHeight')

const pikachuWeightId = document.getElementById('pikachuWeight').innerText
const charizardWeightId =document.getElementById('charizardWeight').innerText
const squirtleWeightId =document.getElementById('squirtleWeight').innerText
let pikachuWeight;
let charizardWeight;
let squirtleWeight;
// const bulbasaurWeight =document.getElementById('bulbasaurWeight')
// const pidgeottoWeight =document.getElementById('pidgeottoWeight')
// const butterfreeWeight =document.getElementById('butterfreeWeight')

const pikachuPictureId = document.getElementById('pikachuPicture')
const charizardPictureId =document.getElementById('charizardPicture')
const squirtlePictureId =document.getElementById('squirtlePicture')
let pikachuPicture;
let charizardPicture;
let squirtlePicture;
// const bulbasaurPicture =document.getElementById('bulbasaurPicture')
// const pidgeottoPicture =document.getElementById('pidgeottoPicture')
// const butterfreePicture =document.getElementById('bulbasaurPicture')




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

function ability(pokeAbility){
     console.log(pokeAbility);
     pikachuAbility= pokeAbility.abilities[0].ability.name;
     squirtleAbility=pokeAbility.abilities[0].ability.name;
     charizardAbility=pokeAbility.abilities[0].ability.name;
     pikachuAbilityId.innerText= pikachuAbility
    //  pikachuAbilityId.appendChild(pikachuAbility);
    //  squirtleAbilityId.appendChild(squirtleAbility);
    //  charizardAbilityId.appendChild(charizardAbility);

    }



    //////////////////////////////////////////////////////////////


    let url ='https://pokeapi.co/api/v2/pokemon/pikachu';
// const pikachuUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";
// const charizardUrl = "https://pokeapi.co/api/v2/pokemon/charizard";
// const squirtleUrl = "https://pokeapi.co/api/v2/pokemon/squirtle";


let pikachuAbilityId = document.getElementById('pikachuAbility');
console.log(pikachuAbilityId)
// const charizardAbilityId =document.getElementById('charizardAbility')
// const squirtleAbilityId =document.getElementById('squirtleAbility')
let pikachuAbility;
// let squirtleAbility;
// let charizardAbility;
// const bulbasaurAbility =document.getElementById('bulbasaurAbility')
// const pidgeottoAbility =document.getElementById('pidgeottoAbility')
// const butterfreeAbility =document.getElementById('butterfreeAbility')

let pikachuHeightId = document.getElementById('pikachuHeight');
// const charizardHeightId =document.getElementById('charizardHeight')
// const squirtleHeightId =document.getElementById('squirtleHeight')
let pikachuHeight;
// let charizardHeight;
// let squirtleHeight;
// const bulbasaurHeight =document.getElementById('bulbasaurHeight')
// const pidgeottoHeight =document.getElementById('pidgeottoHeight')
// const butterfreeHeight =document.getElementById('butterfreeHeight')

let pikachuWeightId = document.getElementById('pikachuWeight');
// const charizardWeightId =document.getElementById('charizardWeight')
// const squirtleWeightId =document.getElementById('squirtleWeight')
let pikachuWeight;
// let charizardWeight;
// let squirtleWeight;
// const bulbasaurWeight =document.getElementById('bulbasaurWeight')
// const pidgeottoWeight =document.getElementById('pidgeottoWeight')
// const butterfreeWeight =document.getElementById('butterfreeWeight')

let pikachuPictureId = document.getElementById('pikachuPicture')
// const charizardPictureId =document.getElementById('charizardPicture')
// const squirtlePictureId =document.getElementById('squirtlePicture')
let pikachuPicture;
// let charizardPicture;
// let squirtlePicture;
// const bulbasaurPicture =document.getElementById('bulbasaurPicture')
// const pidgeottoPicture =document.getElementById('pidgeottoPicture')
// const butterfreePicture =document.getElementById('bulbasaurPicture')




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

function ability(pikachu){
    console.log(pikachu);
     //create variable with create element method
     //store pikachu data into new variable 
     //appendChild

     console.log(pikachuAbilityId);
     pikachuAbility=pikachu.moves[0].move.name;
     pikachuHeight=pikachu.height;
     pikachuWeight=pikachu.weight;
     pikachuPicture=pikachu.
     pikachuAbilityId.textContent= pikachuAbility;
    //  pikachuAbilityId.appendChild(pikachuAbility);
    //  squirtleAbilityId.appendChild(squirtleAbility);
    //  charizardAbilityId.appendChild(charizardAbility);