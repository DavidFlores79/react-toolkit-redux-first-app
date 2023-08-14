import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {

    const dispatch = useDispatch();
    const { pokemons, page, isLoading } = useSelector((state) => state.pokemons);
    console.log('pokemons', pokemons);

    useEffect(() => {
        dispatch(getPokemons());
    }, [])


    return (
        <>
            <div className="container mt-5">
                <h1>PokemonApp</h1>
                <h1>pagina: {page}</h1>
                <hr />
                <span>Loading: {!isLoading ? 'True' : 'False'}</span>
                <ul>
                    {
                        pokemons.map(pokemon => (
                            <li key={pokemon.name}>{pokemon.name}</li>
                        ))
                    }
                </ul>
                <button className="btn btn-primary mr-2" disabled={page == 1} onClick={ () => dispatch(getPokemons(page-2))  }>Prev</button>
                <button className="btn btn-primary" onClick={ () => dispatch(getPokemons(page))  }>Next</button>
            </div>
        </>
    )
}
