import React from 'react';
import DataFetcher from '../datafetcher/datafetcher';

function PokemonDetails({pokemonUrl}) {
    return (
        <DataFetcher
        url={pokemonUrl}
        render={(data, loading, error) => (
            loading ? <div>Loading...</div> : error ? <div>Error {error.message}</div> : (
                <div>
                    {data.abilities}
                </div>
            )
        )}
        />
    )
}

export default PokemonDetails