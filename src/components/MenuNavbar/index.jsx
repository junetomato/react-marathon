import Menu from './Menu'
import NavBar from './NavBar'
import { useState } from 'react'

function MenuNavbar({ bgActive }) {

    const [ isActive, setActive ] = useState( null );

    const handleSetActive = () => {
        setActive( prevState => !prevState );
    }

    return (
        <>
            <Menu
                isActive={ isActive }
                onSetActive={ handleSetActive }
                />
            <NavBar
                isActive={ isActive }
                onSetActive={ handleSetActive }
                bgActive={ bgActive }
                />
        </>
    )
}

export default MenuNavbar;
