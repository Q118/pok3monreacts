import React, { useState } from 'react';
import PokemonList from './PokemonList';

function App() {
  //set up the initial/current state, starting empty in this case. then the method to update it
  //default state on the right of =, will show up on first render
  const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"])
  return (
   // pass pokemon down to our pokemon list
   <PokemonList pokemon={pokemon} />
  );
}

export default App;
