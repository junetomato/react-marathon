import s from './style.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

function Menu({ isActive, onSetActive }) {

    let routesData  = [
        { url: '/', name: 'HOME' },
        { url: '/game', name: 'GAME' },
        { url: '/about', name: 'ABOUT' },
        { url: '/contact', name: 'CONTACT' },
    ];

    const handleClick = () => {
        onSetActive();
    }

    return (
        <div className={ cn( s.menuContainer, {
            [ s.active ]: isActive === true,
            [ s.deactive ]: isActive === false
        } ) }>
            <div className={ cn( s.overlay ) } />
            <div className={ cn( s.menuItems ) }>
                <ul>
                    {
                        routesData.map( ( { url, name }, index ) => (
                            <li key={ index }>
                                <Link to={ url } onClick={ handleClick }>
                                    { name }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu;
