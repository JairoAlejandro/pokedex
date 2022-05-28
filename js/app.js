const $btnOn = document.getElementById('btn-on');
const $screens = document.querySelectorAll('.screen');







$btnOn.addEventListener('click',()=>{
    
    $screens.forEach((screen) =>{
        screen.classList.toggle('on');
    })
    $btnOn.classList.toggle('on');
    if(!$btnOn.classList.contains('on')){
        $pokemons.style.overflow='hidden';
    }
    else{
        $pokemons.style.overflow='scroll';
    }


    /*get 100 pokemons*/
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
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
})
