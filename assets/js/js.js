function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;
  //El siguiente método ataca a otro pokemon
  this.pelear = function(pokemonObjeto){
    //El siguiente condicional revisa si el pokemon sigue con vida o no
    if (pokemonObjeto.vida===0){
        //Si el pokemon no tiene vida te envia un aviso que ya esta muerto el pokemon
        alert('El pokemon ya esta muerto');
    }
    //Al pokemonObjeto (el pokemon que esta siendo agredido) se le resta la vida 
    //según los puntos del ataque  
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque;
    //El siguiente condicional sirve para no poner valores negativos al propiedad de vida
    if (pokemonObjeto.vida<0){
        //Si llega a ser negativo el valor, le pone como mínimo cero
        pokemonObjeto.vida=0;
    }
    
  };
}

var pokemons = [];

//La siguiente función creara un objeto de la clase Pokemon
function crearPokemon(){
  //Las siguientes tres variables extraen los valores del input
  var nombrePokemon = document.getElementById('nombrePokemon').value;
  var colorPokemon = document.getElementById('colorPokemon').value;
  var puntosAtaque = document.getElementById('puntosAtaque').value;
  //La siguiente linea convierte el input a un numero entero
  puntosAtaque = parseInt(puntosAtaque);
  
  //Se crea un nuevo objeto de la clase Pokemon con las variables anteriores 
  var pokemon = new Pokemon (nombrePokemon, colorPokemon, puntosAtaque);
   
  
  //Se añade al array pokemons el objeto creado
  pokemons.push(pokemon);
  //obtenemos el último valor del array
  var longitud=pokemons.length-1;
  //llamamos a la función mostrarPokemon y le asignamos como parametro de entrada
  //la propiedad nombre del últmo objeto del array
  mostrarPokemon(pokemons[longitud].nombre);
}

//La siguiente función añade el nombre de cada pokemon creado a los desplegables
function mostrarPokemon(nombrePokemon){

 
    //las siguientes dos variables obtienen el ID donde crearemos el elemento option
    var pokemon1 = document.getElementById('pokemon1');
    var pokemon2 = document.getElementById('pokemon2');

   
    //Las siguintes variables crean el elemento option
    var elemento = document.createElement('OPTION');
    var elemento2 = document.createElement('OPTION');
    
    //mediante innerText asignamos a nuestros elementos options el String nombrePokemon
    elemento.innerText= nombrePokemon;
    //Se le hace un hijo al select, ahi anidaremos nuestros elementos option
    pokemon1.appendChild(elemento);
    //Lea los dos comentarios anteriores
    elemento2.innerText= nombrePokemon;
    pokemon2.appendChild(elemento2);


  

};

//La siguiente función desatará la pelea más sanguinaria de la historia pokemon
function pelearPokemon(){
    // La siguiente variable almacenará el texto que se mostrará en pantalla
    var texto="";
    // la siguiente variable obtiene el lugar donde se daran a conocer los resultados
    var resultado=document.getElementById("resultadoDePeleaSanguinaria");
    // la siguiente variable incializa el indice en 0 (se refiere al indice del array)
    var indice=0;
    //Obtenemos los valores del select de las siguientes variables
    var pokemon1=document.getElementById('pokemon1').value;
    var pokemon2=document.getElementById('pokemon2').value;
    
    //El siguiente bucle compara el valor del primer select con la propiedad nombre
    //de cada objeto dentro del array
    while (pokemon1 !== pokemons[indice].nombre){
        //incrementa el contador para seguir comparando
        indice++;
    }
    //Le asignamos a la variable pokemon1 todas las caracteristicas del objeto
    pokemon1=pokemons[indice];
    //se reinicia el indice para repetir el proceso anterior con la variable pokemon2
    indice=0;
    while (pokemon2 !== pokemons[indice].nombre){
        indice++;
    }
    pokemon2=pokemons[indice];
    
    //El siguiente condicional se encargara de ejecutar la pelea mas sanguinaria del mundo
    //Pero sin cometer suicidio
    //Compara si no es estrictamente igual pokemon1 con pokemon2
    if (pokemon1!==pokemon2){
        //si es verdad entonces se ejecuta el método pelear del objeto pokemon1
        //teniendo como parametro pokemon2
        pokemon1.pelear(pokemon2);
        
        //Al final texto con el veredicto final de la pelea
        texto=pokemon1.nombre + " atacó a " + pokemon2.nombre + " y "
        + pokemon2.nombre + " tiene una vida de " + pokemon2.vida;
        // se escribe en el ID resultado el texto de la pelea
        resultado.innerHTML=texto;
    }else{
        //Pero si no es verdad (el pokemon se ataca asi mismo)
        //Te avisa que no se puede atacar a si mismo
        alert ("¡Estás a punto de cometer suicidio! Te recomendamos ir al psicologo, por lo pronto escoge otro contrincante");
    }
}