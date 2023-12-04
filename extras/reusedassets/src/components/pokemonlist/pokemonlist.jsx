import React, { useState } from 'react';

function PokemonList({setSelectedPokemonUrl}) {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPokemon = async () => {
        setLoading(true);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
        const data = await response.json();
        setPokemon(data.results);
        setLoading(false);
    };


    return (
        <div>
          <button onClick={fetchPokemon}>Fetch Pokemon</button>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul>
              {pokemon.map((s, index) => (
                <li key={index}>
                  <button onClick={() => setSelectedPokemonUrl(s.url)}>{s.name}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

export default PokemonList;