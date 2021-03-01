import HomePage from './routes/Home';
import GamePage from './routes/Game';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import MenuNavbar from './components/MenuNavbar';
import Footer from './components/Footer';
import cn from 'classnames';
import s from './style.module.css';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import NotFound from './routes/NotFound';
import './App.css';
import { FireBaseContext } from './context/firebaseContext';
import FirebaseClass from './services/firebase';

function App() {

    const location = useLocation();
    const isPadding = location.pathname === '/' || location.pathname === '/game/board';

    return (
        <FireBaseContext.Provider value={ FirebaseClass }>
            <Switch>
                <Route path='/404' component={ NotFound } />
                <Route>
                    <>
                        <MenuNavbar bgActive={ !isPadding } />
                        <div className={ cn( s.wrap, {
                            [ s.isHomePage ]: isPadding
                            } ) }>
                            <Switch>
                                <Route path='/' exact component={ HomePage } />
                                <Route path='/home' component={ HomePage } />
                                <Route path='/game' component={ GamePage } />
                                <Route path='/about' component={ AboutPage } />
                                <Route path='/contact' component={ ContactPage } />
                                <Route render={ () => <Redirect to='/404' /> } />
                            </Switch>
                        </div>
                        <Footer />
                    </>
                </Route>
            </Switch>
        </FireBaseContext.Provider>
    )
}

export default App;
