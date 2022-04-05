import { useState } from 'react';
import Header from '../components/Header'
import Translator from '../components/Translator';
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const Home = (props) => {
    const [currentLanguage, setLanguage] = useState(props.lang)
    const [title, setTitle] = useState(() => currentLanguage === 'it-IT' ? 'Presentazione' : 'Presentation');

    const changeLanguage = () => {
        
        if(currentLanguage === 'it-IT'){
            setLanguage('en-EN')
            setTitle('Presentation')
        } else {
            setLanguage('it-IT')
            setTitle('Presentazione')
        }
    }

    return (
        <>
            <Header />
            <Layout>
                <Translator lang={currentLanguage} handler={changeLanguage} />
                <h1>{title}</h1>
                {}
            </Layout>
            <Footer/>
        </>
    )
}

export default Home;