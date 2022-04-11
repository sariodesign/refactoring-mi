import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
    const lang = window.navigator.language

    return (
        <>
            <Header lang={lang}/>
            <h1>Contact</h1>
            <Footer/>
        </>
    )
}

export default Contact;