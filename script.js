function searchPokemon(lowerPokename, pokemon, pokename) {
    var errorBlock = $('#error_block');
    if (pokename === 'Nidoran') { //PRECISE MALE OR FEMALE NIDORAN
        errorBlock.text('Please, specify: \'Nidoran-m\' or \'Nidoran-f\'');
    } else if (pokename === 'Mr. mime') { //CHANGE NAME
        errorBlock.text('Try instead: \' Mr-mime\'');
    }else if (pokename === 'Farfetch\'d') { //CHANGE NAME
        errorBlock.text('Try instead: \'Farfetchd\'');
    }else {
        for (var i in pokemon) {
            var name = pokemon[i].name;
            var type = pokemon[i].type;
             if (isNaN(lowerPokename) === true && pokename === pokemon[i].name) { //IF THE POKEMON EXIST
                errorBlock.text('');
                displayPokemon(name, type);
                break;
            } else {
                errorBlock.text(pokename + ' not found.');
            }
            if (isNaN(lowerPokename) === false) { // IF USER SEND A NUMBER
                if (pokename === i ) {
                    errorBlock.text('');
                    displayPokemon(name, type);
                    return false;
                } else if (1 > pokename || 151 < pokename) {
                    errorBlock.text('pokemon number :' + pokename + ' not found, please enter a number between 1 and 151.');
                    return false;
                }
            }
        }
    }
}

function displayPokemon(name, type) { // DISPLAY POKEMON AND THESE NAME AND TYPE
    var image = $('#image');
    var pokemonName = $('#pokemonName');
    var pokemonType = $('#pokemonType');
    image.attr('src', 'https://img.pokemondb.net/artwork/' + name.toLowerCase() + '.jpg');
    pokemonName.text('Name : ' + name);
    pokemonType.text('Type : ' + type);
}

$(function () {
    $.ajax({ // LOAD POKEMON AND SAVE HIM IN LOCALSTORAGE
        url: 'pokemon.json',
        type: 'get',
        dataType: 'json',
        success: function (pokemons) {
            localStorage.setItem('pokemons', JSON.stringify(pokemons));
        }
    });

    $('form[name="myForm"]').submit(function () {
        /* GET pokemon.json FROM LOCALSTORAGE */
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