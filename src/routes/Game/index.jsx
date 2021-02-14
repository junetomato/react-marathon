import { useRouteMatch, Switch, Route } from 'react-router-dom';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import { PokemonContext } from '../../context/pokemonContext';
import { useState, useContext, useEffect } from 'react'
import { FireBaseContext } from '../../context/firebaseContext'

const GamePage = () => {

    const match = useRouteMatch();
    const firebase = useContext( FireBaseContext );
    const [ selectedPokemons, setSelectedPokemons ] = useState({});
    const [ pokemons, setPokemons ] = useState({});

    useEffect( () => {
        firebase.getPokemonSocket( ( pokemons ) => {
            setPokemons( pokemons );
        })

        return () => firebase.offPokemonSocket();
    }, [ firebase ] );

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

    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            onSetSelected: handleSelectedPokemons,
            onClearSelected: handleClearSelected,
            allPokemons: pokemons
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
