function searchPoke () {
    let searchResult = document.getElementById("search").value;
    let pokemons = "https://pokeapi.co/api/v2/pokemon/";
    pokemons = pokemons + searchResult;
    pokemons = pokemons.toLocaleLowerCase();
    let displayNT = document.getElementById("name-type")
    let displayImg = document.getElementById("display-img")
    
    fetch(pokemons)
        .then(elemento => elemento.json())
        .then(function (data) {
            displayNT.innerHTML = `Nome: ${upper(data.name)}<br>
             Tipo: ${upper(data.types[0].type.name)} `
             displayImg.innerHTML = "<img src='"+data.sprites.front_default +"'><img src='"+data.sprites.back_default+"'>"
        }).catch(
            displayNT.innerHTML = `NÃO ENCONTRADO`
        )    
    document.getElementById('search').value = ''  
}

function upper(val){
    return val[0].toUpperCase() + val.substr(1);
}

