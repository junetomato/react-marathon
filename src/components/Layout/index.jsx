import s from './style.module.css';
import cn from 'classnames';

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
            className={ cn( s.root ) }
            id={ id }
            style={ layoutStyle }
        >
            <div className={ cn( s.wrapper ) }>
                <article>
                    <div className={ cn( s.title ) }>
                        <h3>{ title }</h3>
                        <span className={ cn( s.separator ) }></span>
                    </div>
                    <div className={ cn( s.desc, s.full ) }>
                        { children }
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
