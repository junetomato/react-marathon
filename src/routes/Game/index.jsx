function GamePage({ onChangePage }) {

    const handleClick = () => {
        console.log( '###: <GamePage />' );
        onChangePage && onChangePage( 'app' );
    }

    return (
        <div>
            <p>This is a Game Page!!!</p>
            <button onClick={ handleClick }>
                Go Back to Home Page
            </button>
        </div>
    );
}

export default GamePage;
