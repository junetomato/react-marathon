import s from './style.module.css';
import cn from 'classnames';
import { ReactComponent as LoginSVG } from '../../../assets/images/login.svg';

function NavBar({ isActive, onSetActive, bgActive = false, onClickLogin }) {

    const handleClick = () => {
        onSetActive && onSetActive();
    }

    return (
        <nav id={ s.navbar } className={ cn({ [ s.bgActive ]: bgActive }) }>
            <div className={ cn( s.navWrapper ) }>
                <p className={ cn( s.brand ) }>
                    LOGO
                </p>
                <div className={ s.loginAndMenu }>
                    <div
                        className={ s.loginWrap }
                        onClick={ onClickLogin }
                        >
                        <LoginSVG />
                    </div>
                    <div
                        className={ cn( s.menuButton, { [s.active] : isActive } ) }
                        onClick={ handleClick }
                        >
                        <span />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
