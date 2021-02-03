import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import bg1 from '../../assets/images/bg1.jpg';
import bg3 from '../../assets/images/bg3.jpg';
import POKEMONS from '../../pokemons.json';
// import s from './style.module.css';
// import cn from 'classnames';
import MenuNavbar from '../../components/MenuNavbar'

function HomePage({ onChangePage }) {

    const handleClickButton = ( page ) => {
        console.log( '###: <HomePage />' );
        onChangePage && onChangePage( page );
    }

    return (
        <>
            <MenuNavbar />
            <Header
                title='This is title'
                descr='This is Description!'
                onClickButton={ handleClickButton }
            />
            <Layout
                id='rules'
                title='Rules'
                urlBg={ bg1 }
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Layout>
            <Layout
                id='cards'
                title='Cards'
                colorBg='#ccc'
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.<br />Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
                <div className="flex">
                    {
                        POKEMONS.map( p => <PokemonCard
                            key={ p.id }
                            values={ p.values }
                            type={ p.type }
                            img={ p.img }
                            name={ p.name }
                            id={ p.id }
                        /> )
                    }
                </div>
            </Layout>
            <Layout
                id='about'
                title='Full Rules'
                urlBg={ bg3 }
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Layout>
            <Footer />
        </>
    )
}

export default HomePage;
