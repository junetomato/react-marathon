import { useState } from 'react';
import Input from '../Input';
import s from './style.module.css';

function LoginForm({ isOpen, onSubmit, signType, onSetSignType }) {

    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

    if( !isOpen && ( email.length > 0 || password.length > 0 ) ) {
        setEmail( '' );
        setPassword( '' );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        onSubmit && onSubmit({
            email,
            password
        });
        setEmail( '' );
        setPassword( '' );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <Input
                value={ email }
                label="Email"
                name="email"
                required={ true }
                onChange={ ( e ) => setEmail( e.target.value ) }
                />
            <Input
                value={ password }
                label="Password"
                type="password"
                name="password"
                required={ true }
                onChange={ ( e ) => setPassword( e.target.value ) }
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
