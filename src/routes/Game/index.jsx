import MenuNavbar from '../../components/MenuNavbar';
import cn from 'classnames';
import s from './style.module.css'

function GamePage({ onChangePage }) {

    const handleClick = () => {
        console.log( '###: <GamePage />' );
        onChangePage && onChangePage( 'app' );
    }

    return (
        <div className={ cn( s.gameWrapper ) }>
            <MenuNavbar bgActive={ true } />
            <p>This is a Game Page!!!</p>
            <button onClick={ handleClick }>
                Go Back to Home Page
            </button>
        </div>
    );
}

export default GamePage;
