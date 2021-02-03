import s from './style.module.css';
import cn from 'classnames';

function Menu({ isActive }) {

    let activeClass = isActive ? 'active' : 'deactive';
    let routesData  = [
        { url: '#welcome', name: 'HOME' },
        { url: '#game', name: 'GAME' },
        { url: '#about', name: 'ABOUT' },
        { url: '#contact', name: 'CONTACT' },
    ];

    return (
        <div className={ cn( s.menuContainer, s[activeClass] ) }>
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
