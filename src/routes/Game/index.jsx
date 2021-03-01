import { useRouteMatch, Switch, Route } from 'react-router-dom';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import { PokemonContext } from '../../context/pokemonContext';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsAsync, selectPokemonsData } from '../../store/pokemons';

const GamePage = () => {

    const match = useRouteMatch();
    const dispatch = useDispatch();

    const pokemonsRedux = useSelector( selectPokemonsData );

    // const isLoading = useSelector( selectPokemonsLoading );

    const [ selectedPokemons, setSelectedPokemons ] = useState({});
    const [ pokemons, setPokemons ] = useState({});
    const [ player1, setPlayer1 ] = useState([]);
    const [ player2, setPlayer2 ] = useState([]);
    const [ isPlayer1Won, setPlayer1Won ] = useState( false );

    useEffect( () => {
        dispatch( getPokemonsAsync() );
    }, [] ); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect( () => {
        setPokemons( pokemonsRedux );
    }, [ pokemonsRedux ] );

    const handleSelectedPokemons = ( key ) => {

        const pokemon = { ...pokemons[ key ] };
        setSelectedPokemons( prevState => {

            if( prevState[ key ] ) {
                const copyState = { ...prevState };
                delete copyState[ key ];

                return copyState;
            }

            return {
                ...prevState,
                [ key ]: pokemon
            }
        });

        setPokemons( prevState => ({
            ...prevState,
            [ key ]: {
                ...prevState[ key ],
                selected: !prevState[ key ].selected
            }
        }));
    }

    const handleClearSelected = () => {
        setSelectedPokemons({});
    }

    const handleSetPlayer1 = ( data ) => {
        setPlayer1( data );
    }

    const handleSetPlayer2 = ( data ) => {
        setPlayer2( data );
    }

    const handleSetPlayer1Win = () => {
        setPlayer1Won( true );
    }

    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            onSetSelected: handleSelectedPokemons,
            onClearSelected: handleClearSelected,
            allPokemons: pokemons,
            player1Finish: player1,
            player2Finish: player2,
            onSetPlayer1Finish: handleSetPlayer1,
            onSetPlayer2Finish: handleSetPlayer2,
            isPlayer1WonFinish: isPlayer1Won,
            onSetPlayer1Win: handleSetPlayer1Win
            }}>
            <Switch>
                <Route path={ `${ match.path }/` } exact component={ StartPage } />
                <Route path={ `${ match.path }/board` }  component={ BoardPage } />
                <Route path={ `${ match.path }/finish` } component={ FinishPage } />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;
