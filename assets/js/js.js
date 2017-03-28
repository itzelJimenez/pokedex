function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

  this.saludar = function(){
    console.log("Hola, me llamo " + this.nombre)
  };

  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  }
}
var pokemons = [];
function crearPokemon(){
  var nombrePokemon = document.getElementById('nombrePokemon').value;
  var colorPokemon = document.getElementById('colorPokemon').value;
  var puntosAtaque = document.getElementById('puntosAtaque').value;
  puntosAtaque = parseInt(puntosAtaque);

  var pokemon = new Pokemon (nombrePokemon, colorPokemon, puntosAtaque);
   
  

  pokemons.push(pokemon);
  console.log(pokemons)
  mostrarPokemon();
}

function mostrarPokemon(){

  /*var x = document.createElement("OPTION");
    x.setAttribute("value", "volvocar");
    var t = document.createTextNode("Volvo");
    x.appendChild(t);
    document.getElementById("mySelect").appendChild(x);*/

  var pokemon1 = document.getElementById('pokemon1');
  

  pokemons.forEach(function(pokemon){

    var elemento = document.createElement('OPTION');
    var 
    elemento.innerHTML= pokemon.nombre;
    pokemon1.appendChild(elemento);
      pokemon1.removeChild(pokemon1.firstChild);
  });
  var pokemon1 = document.getElementById('pokemon2');

}
