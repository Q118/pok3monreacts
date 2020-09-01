import React from 'react'


//pass in pokemon as props
export default function PokemonList( { pokemon } ) {
    return (
        <div>
            {/* everything inside of () will be rendered by the below function */}
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}



//gotta use a unique key anytime inside of a loop.. we use p since each poke name is unique