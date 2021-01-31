import classes from './style.module.css'

function Layout({ id, title, urlBg, colorBg, children }) {

    const layoutStyle = {};
    if( urlBg ) {
        layoutStyle.backgroundImage = `url( '${ urlBg }' )`;
    }
    if( colorBg ) {
        layoutStyle.backgroundColor = colorBg;
    }

    return (
        <section
            className={ classes.root }
            id={ id }
            style={ layoutStyle }
        >
            <div className={ classes.wrapper }>
                <article>
                    <div className={ classes.title }>
                        <h3>{ title }</h3>
                        <span className={ classes.separator }></span>
                    </div>
                    <div className={ `${ classes.desc } ${ classes.full }` }>
                        { children }
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
