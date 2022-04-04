import { useState } from 'react';
import BioData from '../data/bio/Bio'
import Layout from '../components/Layout';
import Header from '../components/Header'
import BioRow from '../components/BioRow'
import Footer from '../components/Footer'

const Bio = () => {
    const lang = window.navigator.language
    const [currentLanguage, setLanguage] = useState('en-EN')
    const changeLanguage = () => {
        console.log(lang)
        //if(lang === 'it-IT')
    }

    const content = BioData[currentLanguage].map((item,index) => 
        <BioRow key={index} year={item.year} month={item.month} paragraphs={item.paragraphs}/>
    )

    return (
        <>
            <Header />
            <Layout>
                <h1>Bio</h1>
                {content}
            </Layout>
            <Footer/>
        </>
    )
}

export default Bio