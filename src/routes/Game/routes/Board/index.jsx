import s from './style.module.css';
import { useEffect, useState } from 'react';
import PokemonCard from '../../../../components/PokemonCard';
import { useHistory } from 'react-router-dom';
import PlayerBoard from './components/PlayerBoard';
import { useDispatch } from 'react-redux';
import { setPlayer1Data, setPlayer1Won, setPlayer2Data } from '../../../../store/pokemonsFinish';

const counterWin = ( board, player1, player2 ) => {
    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach( item => {
        if( item.card.possession === 'red' ) {
            player2Count++;
        }

        if( item.card.possession === 'blue' ) {
            player1Count++;
        }
    });

    return [ player1Count, player2Count ];
}

function BoardPage({ selectedPokemons, onClearSelected }) {

    const history = useHistory();
    const dispatch = useDispatch();

    if( Object.keys( selectedPokemons ).length === 0 ) {
        history.replace( '/game' );
    }

    const [ board, setBoard ] = useState([]);
    const [ player1, setPlayer1 ] = useState( () => {
        dispatch( setPlayer1Data( Object.values( selectedPokemons ) ) );

        return Object.values( selectedPokemons ).map( item => ({
            ...item,
            possession: 'blue'
        }))
    });

    const [ player2, setPlayer2 ] = useState([]);
    const [ choiceCard, setChoiceCard ] = useState( null );
    const [ steps, setSteps ] = useState( 0 );

    useEffect( () => {
        let isUnsubscribe = false;

        async function fetchData() {
            const boardResponse = await fetch( 'https://reactmarathon-api.netlify.app/api/board' );
            const boardRequest = await boardResponse.json();

            const player2Response = await fetch( 'https://reactmarathon-api.netlify.app/api/create-player' );
            const player2Request = await player2Response.json();

            if( !isUnsubscribe ) {
                setBoard( boardRequest.data );
                dispatch( setPlayer2Data( player2Request.data ) );
                setPlayer2( () => {
                    return player2Request.data.map( item => ({
                        ...item,
                        possession: 'red'
                    }))
                });
            }
        }
        fetchData();

        return () => {
            onClearSelected();
            isUnsubscribe = true;
        }
    }, [] ); // eslint-disable-line react-hooks/exhaustive-deps

    const handleClickBoardPlate = async ( position ) => {
        if( choiceCard ) {
            const params = {
                position,
                card: choiceCard,
                board
            }

            const res = await fetch( 'https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( params )
            });

            const request = await res.json();

            if( choiceCard.player === 1 ) {
                setPlayer1( prevState => prevState.filter( item => item.id !== choiceCard.id ))
            }

            if( choiceCard.player === 2 ) {
                setPlayer2( prevState => prevState.filter( item => item.id !== choiceCard.id ))
            }

            setBoard( request.data );
            setSteps( prevState => {
                const count = prevState + 1;
                return count;
            })
        }
    }

    useEffect( () => {
        if( steps === 9 ) {
            const [ count1, count2 ] = counterWin( board, player1, player2 );

            if( count1 > count2 ) {
                alert( 'WIN' );
                dispatch( setPlayer1Won() );

            } else if( count1 < count2 ) {
                alert( 'LOSE' );
            } else {
                alert( 'DRAW' );
            }

            history.replace( '/game/finish' );
        }
    }, [ steps ] ); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard
                    player={ 1 }
                    cards={ player1 }
                    onClickCard={ ( card ) => setChoiceCard( card ) }
                    />
            </div>
            <div className={ s.board }>
                {
                    board.map( item => (
                        <div
                            key={ item.position }
                            className={s.boardPlate}
                            onClick={ () => !item.card && handleClickBoardPlate( item.position ) }
                            >
                            { item.card && <PokemonCard { ...item.card } isActive minimize /> }
                        </div>
                    ))
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard
                    player={ 2 }
                    cards={ player2 }
                    onClickCard={ ( card ) => setChoiceCard( card ) }
                    />
            </div>
        </div>
    );
};

export default BoardPage;
