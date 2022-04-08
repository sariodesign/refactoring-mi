import { useState } from 'react';
import Translator from '../components/Translator';
import BioData from '../data/bio/Bio';
import Layout from '../components/Layout';
import Header from '../components/Header'
import BioRow from '../components/BioRow'
import Footer from '../components/Footer'

const Bio = (props) => {
    const [currentLanguage, setLanguage] = useState(props.lang)
    const [title, setTitle] = useState(() => currentLanguage === 'it-IT' ? 'Biografia' : 'Biography');

    const changeLanguage = () => {
        if(currentLanguage === 'it-IT'){
            setLanguage('en-EN')
            setTitle('Biography')
        } else {
            setLanguage('it-IT')
            setTitle('Biografia')
        }
    }

    const content = BioData[currentLanguage].map((item,index) => 
        <BioRow key={index} year={item.year} month={item.month} paragraphs={item.paragraphs}/>
    )    

    return (
        <>
            <Header />
            <Layout>
                <Translator lang={currentLanguage} handler={changeLanguage} />
                <h1>{title}</h1>
                {content}
            </Layout>
            <Footer/>
        </>
    )
}

export default Bio