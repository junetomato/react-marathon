import s from './style.module.css';
import PokemonCard from '../../../../../../components/PokemonCard';
import { useState } from 'react';
import cn from 'classnames';

function PlayerBoard({ player, cards, onClickCard }) {

    const [ isSelected, setSelected ] = useState( null );

    return (
        <>
            {
                cards.map( item => (
                    <div
                        key={ item.id }
                        className={ cn( s.cardBoard, {
                            [ s.selected ]: isSelected === item.id
                        })}
                        onClick={ () => {
                            setSelected( item.id );
                            onClickCard && onClickCard({
                                player,
                                ...item
                            })
                        }}
                        >
                        <PokemonCard
                            id={ item.id }
                            name={ item.name }
                            img={ item.img }
                            type={ item.type }
                            values={ item.values }
                            isActive
                            minimize
                            />
                    </div>
                ))
            }
        </>
    )
}

export default PlayerBoard;
