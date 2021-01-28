import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import bg1 from './assets/images/bg1.jpg'
import bg3 from './assets/images/bg3.jpg'

function App() {
    return (
        <>
            <Header
                title='This is title'
                descr='This is Description!'
            />
            <Layout
                id='1'
                title='Layout Title One'
                descr='Layout description One'
                urlBg={ bg1 }
            />
            <Layout
                id='2'
                title='Layout Title Two'
                descr='Layout description Two'
                colorBg='#ccc'
            />
            <Layout
                id='3'
                title='Layout Title Three'
                descr='Layout description Three'
                urlBg={ bg3 }
            />
            <Footer />
        </>
    )
}

export default App
