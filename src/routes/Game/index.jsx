import { useRouteMatch, Switch, Route } from 'react-router-dom';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import { PokemonContext } from '../../context/pokemonContext';
import { useState } from 'react';

const GamePage = () => {

    const match = useRouteMatch();
    const [ selectedPokemons, setSelectedPokemons ] = useState([]);

    const handleSelectedPokemons = ( selectedPokemon ) => {
        setSelectedPokemons( prevState => {

            let isPush = true;
            let newSelectedPokemons = [ ...prevState ].filter( item => {
                if( item[0] === selectedPokemon[0] ) {
                    isPush = false;
                    return false;
                } else {
                    return true;
                }
            });

            if( isPush ) {
                newSelectedPokemons.push( selectedPokemon );
            }

            return newSelectedPokemons;
        });
    }

    return (
        <PokemonContext.Provider value={{
            pokemon: selectedPokemons,
            onSelectedPokemons: handleSelectedPokemons
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
