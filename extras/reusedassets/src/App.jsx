import React, { useState } from 'react';
import PokemonList from './components/pokemonlist/pokemonlist';
import PokemonDetails from './components/pokemondetails/pokemondetails';

function App() {
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);
  return (
    <div className="App">
      <PokemonList setSelectedPokemonUrl={setSelectedPokemonUrl} />
      {selectedPokemonUrl && <PokemonDetails pokemonUrl={setSelectedPokemonUrl} />}
    </div>
  );
}

export default App;

