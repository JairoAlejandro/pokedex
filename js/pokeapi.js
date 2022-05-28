const $pokemons = document.getElementById('pokemons');
const $pokemonImg = document.getElementById('pokemon-img');
const $pokemonName = document.getElementById('pokemon-name');
const $hp = document.getElementById('hp');
const $attack = document.getElementById('attack');
const $defense = document.getElementById('defense');
const $speed = document.getElementById('speed');




function createCard(title,src){
    const card = document.createElement('div');
    const cardImg= document.createElement('img');
    cardImg.setAttribute('src',src);
    card.classList.add('card');
    const cardTitle = document.createElement('p');
    cardTitle.textContent=title;
    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    return card
}

function insertData(data,target){
    target.appendChild(data);
}

function getPokemon(url,callback){
    fetch(`${url}`)
    .then((res)=>{
        return res.json();
    })
    .then((pokemon)=>{
        if (callback){
            callback(pokemon)
        }
        else{
            console.log('no hay callback')
        }
    })
} 
$pokemons.addEventListener('click',(e)=>{
    if (e.target.parentElement.classList.contains('card')){
        const element = e.target.parentElement;
        const pokemonName = element.querySelector('p').textContent;
        getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`,(pokemon)=>{
        $pokemonName.textContent=pokemon.name;
        $pokemonImg.setAttribute('src',pokemon.sprites.front_default)
        const hp = pokemon.stats[0].base_stat;
        const attack = pokemon.stats[1].base_stat;
        const defense = pokemon.stats[2].base_stat;
        const speed = pokemon.stats[5].base_stat;
        $hp.previousElementSibling.textContent=hp;
        $attack.previousElementSibling.textContent=attack;
        $defense.previousElementSibling.textContent=defense;
        $speed.previousElementSibling.textContent=speed;
        $hp.setAttribute('value',hp);
        $attack.setAttribute('value',attack);
        $defense.setAttribute('value',defense);
        $speed.setAttribute('value',speed);
        })
    }
        
})



/* window.addEventListener('load',()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=6')
    .then((res)=>{
        return res.json();
    })
    .then((pokemons)=>{
        const pokemonList = pokemons.results;
        pokemonList.forEach(pokemon => {
            getPokemon('https://pokeapi.co/api/v2/pokemon/'+pokemon.name,(pokemon)=>{
                const pokemonImg = pokemon.sprites.front_default;
                const pokecard = createCard(pokemon.name,pokemonImg);
                $pokemons.appendChild(pokecard);
            });
        });
    })
}) */




