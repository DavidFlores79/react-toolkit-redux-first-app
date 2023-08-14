import { createSlice } from '@reduxjs/toolkit';



export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons: (state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;

            console.log('action', action);
        },
    }
});


export const { increment, startLoadingPokemons, setPokemons } = pokemonSlice.actions;