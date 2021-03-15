import { useState } from 'react';
import PokemonCard from '../../../../components/PokemonCard';
import s from './style.module.css';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';
import FirebaseClass from '../../../../services/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { player1Data, player2Data, isPlayer1Won } from '../../../../store/pokemonsFinish';
import { getPokemonsAsync } from '../../../../store/pokemons';

function FinishPage() {

    const player1Finish = useSelector( player1Data );
    const player2Finish = useSelector( player2Data );
    const isPlayer1WonFinish = useSelector( isPlayer1Won );
    const history = useHistory();
    const dispatch = useDispatch();

    if( Object.keys( player1Finish ).length === 0 || player2Finish.length === 0 ) {
        history.replace( '/game' );
    }

    const [ isSelected, setSelected ] = useState( null );
    const [ choiceCard, setChoiceCard ] = useState( null );

    const handleClick = () => {
        if( choiceCard !== null ) {
            FirebaseClass.addPokemon( choiceCard, () => console.log( 'new pokemon added' ) );
            dispatch( getPokemonsAsync() );
        }
        history.replace( '/game' );
    }

    return (
        <div className={ s.wrapper }>
            <div className={ s.container }>
                {
                    player1Finish.map( item => (
                        <div
                            className={ s.cardBoard }
                            key={ item.id }
                            >
                            <PokemonCard
                                id={ item.id }
                                name={ item.name }
                                img={ item.img }
                                type={ item.type }
                                values={ item.values }
                                isActive
                                />
                        </div>
                    ))
                }
            </div>
            <button className={ s.endBtn } onClick={ handleClick }>
                END GAME
            </button>
            <div className={ s.container }>
                {
                    player2Finish.map( item => (
                        <div
                            key={ item.id }
                            className={ cn( s.cardBoard, s.playerTwo, {
                                [ s.selected ]: isSelected === item.id
                            })}
                            onClick={ () => {
                                if( isPlayer1WonFinish ) {
                                    setSelected( item.id );
                                    setChoiceCard({ ...item });
                                }
                            }}
                            >
                            <PokemonCard
                                id={ item.id }
                                name={ item.name }
                                img={ item.img }
                                type={ item.type }
                                values={ item.values }
                                isActive
                                />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FinishPage;
