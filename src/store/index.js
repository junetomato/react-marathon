import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from './pokemons';
import pokemonsFinishReducer from './pokemonsFinish';

export default configureStore({
    reducer: {
        pokemons: pokemonsReducer,
        pokemonsFinish: pokemonsFinishReducer
    }
});
