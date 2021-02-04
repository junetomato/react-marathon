import s from './style.module.css';
import cn from 'classnames';

function NavBar({ isActive, onSetActive, bgActive = false }) {

    const handleClick = () => {
        console.log( '###: <NavBar />' );
        onSetActive && onSetActive();
    }

    return (
        <nav id={ s.navbar } className={ cn({ [ s.bgActive ]: bgActive }) }>
            <div className={ cn( s.navWrapper ) }>
                <p className={ cn( s.brand ) }>
                    LOGO
                </p>
                <div
                    className={ cn( s.menuButton, { [s.active] : isActive } ) }
                    onClick={ handleClick }
                    >
                    <span />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
