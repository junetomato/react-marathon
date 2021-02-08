import { useHistory } from "react-router-dom";
import PokemonCard from '../../../../components/PokemonCard';
import { useState, useEffect, useContext } from 'react';
import database from '../../../../services/firebase';
import { PokemonContext } from '../../../../context/pokemonContext';

function GamePage() {

    const history = useHistory();
    const selectedPokemonsContext = useContext( PokemonContext );
    const [ pokemons, setPokemons ] = useState({});

    useEffect( () => {
        database.ref( 'pokemons' ).once( 'value', ( snapshot ) => {
            setPokemons( snapshot.val() );
        })
    }, [] );

    const handleClick = () => {
        history.push( '/' );
    }

    const handleSetSelectedPokemons = ( id ) => {
        setPokemons( prevState => {
            return Object.entries( prevState ).reduce( ( acc, item ) => {
                const pokemon = { ...item[1] };
                if( pokemon.id === id ) {
                    pokemon.isSelected = pokemon.isSelected ? false : true;
                };

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
        selectedPokemonsContext.onSelectedPokemons( id );
    }

    const handleAddNewPokemon = ( newPokemonData ) => {
        const newKey = database.ref().child( 'pokemons' ).push().key;
        database.ref( 'pokemons/' + newKey ).set({ ...newPokemonData });
    }

    return (
        <div>
            <p>This is a Game Page!!!</p>
            <button onClick={ handleClick }>
                Go Back to Home Page
            </button>
            <div>
                <button onClick={ handleAddNewPokemon }>Add New Pokemon</button>
            </div>
            <div className="flex">
                {
                    Object.entries( pokemons ).map( ([ key, { id, values, type, img, name, active, isSelected } ]) =>
                        <PokemonCard
                            key={ key }
                            values={ values }
                            type={ type }
                            img={ img }
                            name={ name }
                            id={ id }
                            isActive={ true }
                            isSelected={ isSelected }
                            setSelected={ handleSetSelectedPokemons }
                            />
                    )
                }
            </div>
        </div>
    );
}

export default GamePage;
