$(function () {
    $.ajax({
        url: 'pokemon.json',
        type: 'get',
        dataType: 'json',
        success:    function(pokemon){
            localStorage.setItem('pokemons', JSON.stringify(pokemon));
        }
    })
});