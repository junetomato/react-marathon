import Menu from './Menu';
import NavBar from './NavBar';
import { useState } from 'react';
import Modal from '../Modal';

function MenuNavbar({ bgActive }) {

    const [ isActive, setActive ] = useState( null );
    const [ isOpenModal, setOpenModal ] = useState( false );

    const handleSetActive = () => {
        setActive( prevState => !prevState );
    }

    const handleClickLogin = () => {
        setOpenModal( prevState => !prevState );
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
                onClickLogin={ handleClickLogin }
                />
            <Modal
                isOpen={ isOpenModal }
                title="Log In..."
                onCloseModal={ handleClickLogin }
                >
                Some Text Here...
            </Modal>
        </>
    )
}

export default MenuNavbar;
