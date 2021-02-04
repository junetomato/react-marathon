// import cn from 'classnames';
// import s from './style.module.css'
import { useHistory } from "react-router-dom";
import POKEMONS from '../../pokemons.json';
import PokemonCard from '../../components/PokemonCard';
import { useState } from 'react';

function GamePage() {

    const history = useHistory();
    const [ pokemons, setActivePokemons ] = useState( POKEMONS );

    const handleClick = () => {
        history.push( '/' );
    }

    const handleSetActivePokemons = ( id ) => {
        setActivePokemons( prevState =>
            prevState.map( pOld => {
                let p = { ...pOld };

                if( p.id === id ) {
                    p.active = !p.active;
                }
                return p;
            } )
        )
    }

    return (
        <div>
            <p>This is a Game Page!!!</p>
            <button onClick={ handleClick }>
                Go Back to Home Page
            </button>
            <div className="flex">
                {
                    pokemons.map( p => <PokemonCard
                        key={ p.id }
                        values={ p.values }
                        type={ p.type }
                        img={ p.img }
                        name={ p.name }
                        id={ p.id }
                        isActive={ p.active }
                        setActive={ handleSetActivePokemons }
                        /> )
                }
            </div>
        </div>
    );
}

export default GamePage;
