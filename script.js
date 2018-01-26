function searchPokemon(lowerPokename, pokemon, pokename) {
    var errorBlock = $('#error_block');
    if (pokename === 'Nidoran') {
        errorBlock.text('Please, specify: \'nidoran-m\' or \'nidoran-f\'');
    } else {
        for (var i in pokemon) {
            var name = pokemon[i].name;
            var type = pokemon[i].type;
            if (isNaN(lowerPokename) === true && pokename === pokemon[i].name) {
                displayPokemon(name, type);
                errorBlock.text('');
                break;
            } else {
                errorBlock.text(pokename + ' not found.');
            }
        }
        if (isNaN(lowerPokename) === false) {
            if (pokename === i) {
                displayPokemon(name, type);
                return false;
            } else if (1 > pokename || 151 < pokename) {
                errorBlock.text('pokemon number ' + pokename + ' not found, please enter a number between 1 and 151.');
                return false;
            }
        }

    }
}

function displayPokemon(name, type) {
    var image = $('#image');
    var pokemonName = $('#pokemonName');
    var pokemonType = $('#pokemonType');
    image.attr('src', 'https://img.pokemondb.net/artwork/' + name.toLowerCase() + '.jpg');
    pokemonName.text('Name : ' + name);
    pokemonType.text('Type : ' + type);
    $('error_block').text('You find: ' + name);
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
        searchPokemon(lowerPokename, pokemon, pokename);

        return false;
    });
});