import Header from '../components/Header'
import Footer from '../components/Footer'

const Press = () => {
    const lang = window.navigator.language

    return (
        <>
            <Header lang={lang}/>
            <h1>Press</h1>
            <Footer/>
        </>
    )
}

export default Press;