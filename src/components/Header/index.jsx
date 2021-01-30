import classes from './Header.module.css';

function Header({ title, descr }) {
    return (
        <header className={ classes.root }>
            <div className={ classes.forest }></div>
            <div className={ classes.container }>
                <h1>{ title }</h1>
                <p>{ descr }</p>
            </div>
        </header>
    )
}

export default Header;
