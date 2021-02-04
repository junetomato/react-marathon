import s from './style.module.css';
import cn from 'classnames';

function Menu({ isActive }) {

    let routesData  = [
        { url: '#welcome', name: 'HOME' },
        { url: '#game', name: 'GAME' },
        { url: '#about', name: 'ABOUT' },
        { url: '#contact', name: 'CONTACT' },
    ];

    return (
        <div className={ cn( s.menuContainer, {
            [ s.active ]: isActive === true,
            [ s.deactive ]: isActive === false
        } ) }>
            <div className={ cn( s.overlay ) } />
            <div className={ cn( s.menuItems ) }>
                <ul>
                    {
                        routesData.map( item => (
                            <li>
                                <a href={ item.url }>
                                    { item.name }
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu;
