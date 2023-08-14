import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = ( page = 0) => {

    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        //todo: realizar peticion http
        const { data } = await pokemonApi.get(`/v2/pokemon?offset=${page * 10}&limit=10`);

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}