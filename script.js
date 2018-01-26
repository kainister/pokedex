function displayPokemon (inputname, pokemon, pokename) {
    var image = $('#image');
    var error = true;
    console.log(pokemon);
    for (var i in pokemon) {
        console.log(pokemon[i]);
        if (isNaN(inputname) === true) {
            console.log(pokemon[i]);
            if (pokename === pokemon[i].name) {
                image.attr('src', 'https://img.pokemondb.net/artwork/' + inputname + '.jpg');
                error = false;
                console.log(error);
                return false;
            }
            console.log(error);
            isPokemonFound(error, pokename);
        }
    }
}
function isPokemonFound (error, pokename){
    if (error === true) {
        console.log(pokename+' not found');
    } else if (error === false) {
        console.log('Your catch '+pokename);
    }
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
        var pokemons = localStorage.getItem('pokemons');
        var pokemon = JSON.parse(pokemons);
        for (var i in pokemon){
            console.log(pokemon[i].name);
        }


        var inputname = $('#pokename').val();
        var name = inputname.substr(1);
        var firstChar = inputname.charAt(0).toUpperCase();
        var pokename = firstChar + name;
        console.log(pokemon);
        displayPokemon(inputname, pokemon, pokename);

        return false;
    });
});