import { useRouteMatch, Switch, Route } from 'react-router-dom';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
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

    useEffect( () => {
        dispatch( getPokemonsAsync() );
    }, [] ); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect( () => {
        setPokemons( pokemonsRedux );
    }, [ pokemonsRedux ] );

    const handleSelectedPokemons = ( key ) => {
        setPokemons( prevState => ({
            ...prevState,
            [ key ]: {
                ...prevState[ key ],
                selected: !prevState[ key ].selected
            }
        }));
    }

    const handleSetSelectedPokemonsState = ( key ) => {
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
    }

    const handleClearSelected = () => {
        setSelectedPokemons({});
    }

    return (
        <Switch>
            <Route path={ `${ match.path }/` } exact component={ () => (
                <StartPage
                    pokemons={ pokemons }
                    selectedPokemons={ selectedPokemons }
                    onSetSelected={ handleSelectedPokemons }
                    onSetSelectedPokemonsState={ handleSetSelectedPokemonsState }
                    />
            )} />
            <Route path={ `${ match.path }/board` }  component={ () => (
                <BoardPage
                    selectedPokemons={ selectedPokemons }
                    onClearSelected={ handleClearSelected }
                    />
            )} />
            <Route path={ `${ match.path }/finish` } component={ () => (
                <FinishPage />
            )} />
        </Switch>
    );
};

export default GamePage;
