import { useContext, useState } from 'react'
import PokemonCard from '../../../../components/PokemonCard';
import { PokemonContext } from '../../../../context/pokemonContext';
import s from './style.module.css';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';
import { FireBaseContext } from '../../../../context/firebaseContext';

function FinishPage() {

    const { player1Finish, player2Finish, isPlayer1WonFinish, onClearSelected } = useContext( PokemonContext );
    const firebase = useContext( FireBaseContext );
    const history = useHistory();

    const [ isSelected, setSelected ] = useState( null );
    const [ choiceCard, setChoiceCard ] = useState( null );

    if( player1Finish.length === 0 && player2Finish.length === 0 ) {
        history.replace( '/game' );
    }

    const handleClick = () => {
        if( choiceCard !== null ) {
            firebase.addPokemon( choiceCard, () => console.log( 'new pokemon added' ) );
        }
        onClearSelected();
        history.replace( '/game' );
    }

    return (
        <div className={ s.wrapper }>
            <div className={ s.container }>
                {
                    player1Finish.map( item => (
                        <div
                            className={ s.cardBoard }
                            >
                            <PokemonCard
                                key={ item.id }
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
                                key={ item.id }
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
