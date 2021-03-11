import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'pokemonsFinish',
    initialState: {
        player1Data: [],
        player2Data: [],
        isPlayer1Won: null
    },
    reducers: {
        setPlayer1Data: ( state, action ) => ({
            ...state,
            player1Data: action.payload
        }),
        setPlayer2Data: ( state, action ) => ({
            ...state,
            player2Data: action.payload
        }),
        setPlayer1Won: state => ({
            ...state,
            isPlayer1Won: true
        })
    }
});

export const { setPlayer1Data, setPlayer2Data, setPlayer1Won } = slice.actions;

export const player1Data = state => state.pokemonsFinish.player1Data;
export const player2Data = state => state.pokemonsFinish.player2Data;
export const isPlayer1Won = state => state.pokemonsFinish.isPlayer1Won;

export default slice.reducer;
