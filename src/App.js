import React, { useState } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
//axios in order to call api

function App() {
  //set up the initial/current state, starting empty in this case. then the method to update it
  //default state on the right of =, will show up on first render
  const [pokemon, setPokemon] = useState([])

//this line will make a fetch request and return us a promise
//the promise will have the response for our request variable that gets returned
  //the property of 'data' will hold all the json data from the api
axios.get("https://pokeapi.co/api/v2/pokemon/").then(res => {
  //map through to get name from each one 
  //set pokemon variable to that value
setPokemon(res.data.results.map(p => p.name))
})



  return (
   // pass pokemon down to our pokemon list
   <PokemonList pokemon={pokemon} />
  );
}

export default App;
