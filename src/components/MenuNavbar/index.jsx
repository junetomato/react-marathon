import Menu from './Menu'
import NavBar from './NavBar'
import { useState } from 'react'

function MenuNavbar() {

    const [ isActive, setActive ] = useState( false );

    const handleSetActive = () => {
        console.log( '###: <MenuNavbar />' );
        setActive( !isActive );
    }

    return (
        <>
            <Menu
                isActive={ isActive }
                />
            <NavBar
                isActive={ isActive }
                onSetActive={ handleSetActive }
                />
        </>
    )
}

export default MenuNavbar;
