import Menu from './Menu';
import NavBar from './NavBar';
import { useState } from 'react';
import Modal from '../Modal';
import LoginForm from '../LoginForm';

function MenuNavbar({ bgActive }) {

    const [ isActive, setActive ] = useState( null );
    const [ isOpenModal, setOpenModal ] = useState( true );

    const handleSetActive = () => {
        setActive( prevState => !prevState );
    }

    const handleClickLogin = () => {
        setOpenModal( prevState => !prevState );
    }

    const handleSubmitLoginForm = ( values ) => {
        console.log( '### values', values );
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
                <LoginForm
                    onSubmit={ handleSubmitLoginForm }
                    isOpen={ isOpenModal }
                    />
            </Modal>
        </>
    )
}

export default MenuNavbar;
