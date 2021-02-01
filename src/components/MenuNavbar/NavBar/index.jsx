import s from './style.module.css';
import cn from 'classnames';

function NavBar({ isActive, onSetActive }) {

    const handleClick = () => {
        console.log( '###: <NavBar />' );
        onSetActive && onSetActive();
    }

    return (
        <nav id={ s.navbar }>
            <div className={ cn( s.navWrapper ) }>
                <p className={ cn( s.brand ) }>
                    LOGO
                </p>
                <a
                    href="#setactive"
                    className={ cn( s.menuButton, { [s.active] : isActive } ) }
                    onClick={ handleClick }
                    >
                    <span />
                </a>
            </div>
        </nav>
    )
}

export default NavBar;
