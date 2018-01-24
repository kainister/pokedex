$(function () {
    console.log('test');
    $.ajax({
        url: 'pokemon.json',
        type: 'get',
        dataType: 'json',
        success:    function(pokemon){
            for (var poke in pokemon.pokemon)
            console.log(pokemon.pokemon[poke]);
        }
    });
});
