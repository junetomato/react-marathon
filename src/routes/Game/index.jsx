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
    const [ selectedPokemons, setSelectedPokemons ] = useState([]);
    const [ pokemons, setPokemons ] = useState({});

    window.pokemons = pokemons;
    window.selectedPokemons = selectedPokemons;

    useEffect( () => {
        firebase.getPokemonSocket( ( pokemons ) => {
            setPokemons( pokemons );
        })
    }, [ firebase ] );

    const handleSelectedPokemons = ( id ) => {

        setSelectedPokemons( prevState => {
            return [];
        })

        setPokemons( prevState => {
            return Object.entries( prevState ).reduce( ( acc, item ) => {
                const pokemon = { ...item[1] };
                if( pokemon.id === id ) {
                    pokemon.isSelected = pokemon.isSelected ? false : true;
                };

                acc[item[0]] = pokemon;

                if( pokemon.isSelected ) {
                    setSelectedPokemons( prevState => {
                        return [ ...prevState, [ item[0], pokemon ] ];
                    })
                }

                return acc;
            }, {});
        });
    }

    return (
        <PokemonContext.Provider value={{
            pokemon: selectedPokemons,
            onSetSelected: handleSelectedPokemons,
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
