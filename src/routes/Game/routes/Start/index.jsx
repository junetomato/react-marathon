import { useHistory } from "react-router-dom";
import PokemonCard from '../../../../components/PokemonCard';
import { useContext } from 'react';
import { PokemonContext } from '../../../../context/pokemonContext';
import s from './style.module.css';

function StartPage() {

    const history = useHistory();
    const pokemonContext = useContext( PokemonContext );

    const handleClick = () => {
        history.push( '/' );
    }

    const handleStartGameClick = () => {
        history.push( '/game/board' );
    }

    return (
        <div>
            <p>This is a Game Page!!!</p>
            <button onClick={ handleClick }>
                Go Back to Home Page
            </button>
            <div className={ s.startGameLink }>
                <button
                    onClick={ handleStartGameClick }
                    disabled={ Object.keys( pokemonContext.pokemons ).length < 5 }
                    >
                    Start Game
                </button>
            </div>
            <div className="flex">
                {
                    Object.entries( pokemonContext.allPokemons ).map( ([ key, { id, values, type, img, name, selected } ]) =>
                        <PokemonCard
                            key={ key }
                            firebaseKey={ key }
                            values={ values }
                            type={ type }
                            img={ img }
                            name={ name }
                            id={ id }
                            isActive
                            isSelected={ selected }
                            onSetSelected={ () => {
                                if( Object.keys( pokemonContext.pokemons ).length < 5 || selected ) {
                                    pokemonContext.onSetSelected( key )
                                }
                            }}
                            className={ s.card }
                            />
                    )
                }
            </div>
        </div>
    );
}

export default StartPage;
