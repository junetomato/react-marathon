import { useState } from 'react';
import Input from '../Input';

function LoginForm({ isOpen, onSubmit }) {

    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

    if( !isOpen && email.length > 0 && password.length > 0 ) {
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

    console.log( '### email', email );
    console.log( '### password', password );

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
            <button>
                Login
            </button>
        </form>
    )
}

export default LoginForm;
