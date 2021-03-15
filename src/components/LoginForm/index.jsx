import { useState, useEffect } from 'react'
import Input from '../Input';
import s from './style.module.css';

function LoginForm({ isOpen, onSubmit, signType, onSetSignType }) {

    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

    useEffect(() => {
        setEmail( '' );
        setPassword( '' );
    }, [ isOpen ] );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        onSubmit && onSubmit({
            email,
            password
        });
    }

    return (
        <form onSubmit={ handleSubmit }>
            <Input
                value={ email }
                label="Email"
                name="email"
                required={ true }
                onInputChange={ setEmail }
                />
            <Input
                value={ password }
                label="Password"
                type="password"
                name="password"
                required={ true }
                onInputChange={ setPassword }
                />
            <div className={ s.buttonsWrap }>
                <button>
                    { signType === 'in' ? 'Signin' : 'Signup' }
                </button>
                <div
                    onClick={ ( e ) => onSetSignType( e ) }
                    className={ s.toggle }
                    >
                    { signType === 'in' ? 'Register?' : 'Login?' }
                </div>
            </div>
        </form>
    )
}

export default LoginForm;
