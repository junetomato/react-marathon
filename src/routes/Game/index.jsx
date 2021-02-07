import cn from 'classnames';
import s from './style.module.css';
import { useHistory } from "react-router-dom";
import PokemonCard from '../../components/PokemonCard';
import { useState, useEffect } from 'react';
import database from '../../services/firebase';

function GamePage() {

    const history = useHistory();
    const [ pokemons, setPokemons ] = useState({});

    useEffect( () => {
        database.ref( 'pokemons' ).on( 'value', ( snapshot ) => {
            setPokemons( snapshot.val() );
        })
    }, [] );

    const handleClick = () => {
        history.push( '/' );
    }

    const handleSetActivePokemons = ( id ) => {
        setPokemons( prevState => {
            return Object.entries( prevState ).reduce( ( acc, item ) => {
                const pokemon = { ...item[1] };
                const objID   = item[0];

                if( pokemon.id === id ) {
                    pokemon.active = pokemon.active ? false : true;
                    database.ref( 'pokemons/'+ objID ).set({ ...pokemon });
                }

                acc[ item[0] ] = pokemon;

                return acc;
            }, {} );
        });
    }

    const handleAddNewPokemon = ( newPokemonData ) => {
        newPokemonData = {
            "abilities" : [ "keen-eye", "tangled-feet", "big-pecks" ],
            "base_experience" : 122,
            "height" : 11,
            "id" : 999,
            "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
            "name" : "pidgeotto",
            "stats" : {
                "attack" : 60,
                "defense" : 55,
                "hp" : 63,
                "special-attack" : 50,
                "special-defense" : 50,
                "speed" : 71
            },
            "type" : "flying",
            "values" : {
                "bottom" : 1,
                "left" : 2,
                "right" : 3,
                "top" : "A"
            }
        }

        const newKey = database.ref().child( 'pokemons' ).push().key;
        database.ref( 'pokemons/' + newKey ).set({ ...newPokemonData });

        // setPokemons( prevState => {
        //     return {
        //         ...prevState,
        //         [ newKey ]: { ...newPokemonData }
        //     }
        // })
    }

    return (
        <div>
            <p>This is a Game Page!!!</p>
            <button onClick={ handleClick }>
                Go Back to Home Page
            </button>
            <div className={ cn( s.newPokemonBtn ) }>
                <button onClick={ handleAddNewPokemon }>Add New Pokemon</button>
            </div>
            <div className="flex">
                {
                    Object.entries( pokemons ).map( ([ key, { id, values, type, img, name, active } ]) =>
                        <PokemonCard
                            key={ key }
                            values={ values }
                            type={ type }
                            img={ img }
                            name={ name }
                            id={ id }
                            isActive={ active }
                            setActive={ handleSetActivePokemons }
                            />
                    )
                }
            </div>
        </div>
    );
}

export default GamePage;
