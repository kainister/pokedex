function displayPokemon(lowerPokename, pokemon, pokename) {
    for (var i in pokemon) {
        var name = pokemon[i].name;
        var type = pokemon[i].type;
        if (isNaN(lowerPokename) === true) {
            if (pokename === pokemon[i].name) {
                pokemonFound(name, type);
                return false;
            } else {
                console.log('pokemon not found');
            }
        } else if (pokename === i) {
            pokemonFound(name, type);
            return false;
        } else if (1 > pokename || 151 < pokename) {
            console.log('take a number between 1 and 151');
            return false;
        }
    }

}

function pokemonFound(name, type) {
    console.log(name);
    var image = $('#image');
    var pokemonName = $('#pokemonName');
    var pokemonType = $('#pokemonType');
    image.attr('src', 'https://img.pokemondb.net/artwork/' + name.toLowerCase() + '.jpg');
    pokemonName.text('Name : ' + name);
    pokemonType.text('Type : ' + type);
    console.log('You caught: ' + name);
}

$(function () {
    $.ajax({
        url: 'pokemon.json',
        type: 'get',
        dataType: 'json',
        success: function (pokemons) {
            localStorage.setItem('pokemons', JSON.stringify(pokemons));
        }
    });

    $('form[name="myForm"]').submit(function () {
        /* GET pokemon.son FROM LOCALSTORAGE */
        var pokemons = localStorage.getItem('pokemons');
        var pokemon = JSON.parse(pokemons);


        /* TAKE VALUE OF INPUT AND MAKE UPPER FIRST CHAR*/
        var inputname = $('#pokename').val();
        var name = inputname.substr(1);
        var firstChar = inputname.charAt(0).toUpperCase();
        var pokename = firstChar + name;
        var lowerPokename = inputname.toLowerCase();
        displayPokemon(lowerPokename, pokemon, pokename);

        return false;
    });
});