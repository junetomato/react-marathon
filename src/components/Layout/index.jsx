import classes from './Layout.module.css'

function Layout({ id, title, descr, urlBg, colorBg }) {

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
                        <p>{ descr }</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
