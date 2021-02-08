import { useRouteMatch, Switch, Route } from 'react-router-dom';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import { PokemonContext } from '../../context/pokemonContext';
import { useState } from 'react';

const GamePage = () => {

    const match = useRouteMatch();
    const [ selectedPokemons, setSelectedPokemons ] = useState({ pokemon: [] });

    const handleSelectedPokemons = ( id ) => {
        setSelectedPokemons( prevState => {
            const selectedPokemonsObj    = { ...prevState };
            const selectedPokemons = [ ...selectedPokemonsObj.pokemon ];
            const indexOf = selectedPokemons.indexOf( id )

            if( indexOf === -1 ) {
                selectedPokemons.push( id );
            } else {
                selectedPokemons.splice( indexOf, 1 );
            }

            return {
                ...prevState,
                pokemon: selectedPokemons
            };
        });
    }

    return (
        <PokemonContext.Provider value={{
            selectedPokemons,
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
