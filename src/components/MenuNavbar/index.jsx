import Menu from './Menu';
import NavBar from './NavBar';
import { useState } from 'react';
import Modal from '../Modal';
import LoginForm from '../LoginForm';
import { NotificationManager } from 'react-notifications';

function MenuNavbar({ bgActive }) {

    const [ isActive, setActive ] = useState( null );
    const [ isOpenModal, setOpenModal ] = useState( false );
    const [ signType, setSignType ] = useState( 'in' );

    const handleSetActive = () => {
        setActive( prevState => !prevState );
    }

    const handleClickLogin = () => {
        setOpenModal( prevState => !prevState );
    }

    const handleSubmitLoginForm = async ({ email, password }) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        }
        const signTypeAPI = {
            in: 'signInWithPassword',
            up: 'signUp'
        };

        const response = await fetch( `https://identitytoolkit.googleapis.com/v1/accounts:${ signTypeAPI[ signType ] }?key=AIzaSyAHcD-tri0-Q17avJVe8qjbzxYKeK2Qswk`, requestOptions ).then( res => res.json() );

        if( response.hasOwnProperty( 'error' ) ) {
            NotificationManager.error( response.error.message, 'Wrong!' );
        } else {
            localStorage.setItem( 'idToken', response.idToken );
            NotificationManager.success( 'Success message' );
        }
    }

    const handleSignType = ( e ) => {
        e.preventDefault();

        setSignType( prevState => {
            return prevState === 'in' ? 'up' : 'in';
        });
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
                    signType={ signType }
                    onSetSignType={ handleSignType }
                    />
            </Modal>
        </>
    )
}

export default MenuNavbar;
