import { useHistory, Link } from "react-router-dom";
import PokemonCard from '../../../../components/PokemonCard';
import { useContext } from 'react';
import { PokemonContext } from '../../../../context/pokemonContext';
import s from './style.module.css';

function GamePage() {

    const history = useHistory();
    const pokemonsContext = useContext( PokemonContext );

    const handleClick = () => {
        history.push( '/' );
    }

    return (
        <div>
            <p>This is a Game Page!!!</p>
            <button onClick={ handleClick }>
                Go Back to Home Page
            </button>
            <div className={ s.startGameLink }>
                <Link to='/game/board'>Start Game</Link>
            </div>
            <div className="flex">
                {
                    Object.entries( pokemonsContext.allPokemons ).map( ([ key, { id, values, type, img, name, active, isSelected } ]) =>
                        <PokemonCard
                            key={ key }
                            firebaseKey={ key }
                            values={ values }
                            type={ type }
                            img={ img }
                            name={ name }
                            id={ id }
                            isActive={ true }
                            isSelected={ isSelected }
                            onSetSelected={ pokemonsContext.onSetSelected }
                            />
                    )
                }
            </div>
        </div>
    );
}

export default GamePage;
