import { useHistory } from "react-router-dom";
import PokemonCard from '../../../../components/PokemonCard';
import s from './style.module.css';

function StartPage({
    pokemons,
    selectedPokemons,
    onSetSelected,
    onSetSelectedPokemonsState
    }) {

    const history = useHistory();

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
                    disabled={ Object.keys( selectedPokemons ).length < 5 }
                    >
                    Start Game
                </button>
            </div>
            <div className="flex">
                {
                    Object.entries( pokemons ).map( ([ key, { id, values, type, img, name, selected } ]) =>
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
                                if( Object.keys( selectedPokemons ).length < 5 || selected ) {
                                    onSetSelected && onSetSelected( key );
                                    onSetSelectedPokemonsState && onSetSelectedPokemonsState( key );
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
