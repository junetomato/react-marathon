import HomePage from './routes/Home';
import GamePage from './routes/Game';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import MenuNavbar from './components/MenuNavbar';
import Footer from './components/Footer';
import cn from 'classnames';
import s from './style.module.css';
import AboutPage from './routes/About'
import ContactPage from './routes/Contact'
import NotFound from './routes/NotFound'
import './App.css'

function App() {

    const match = useRouteMatch( '/' );

    return (
        <Switch>
            <Route path='/404' component={ NotFound } />
            <Route>
                <>
                    <MenuNavbar bgActive={ !match.isExact } />
                    <div className={ cn( s.wrap, {
                        [ s.isHomePage ]: match.isExact
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
    )
}

export default App;
