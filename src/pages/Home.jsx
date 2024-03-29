import React, { useState } from 'react';
import Translator from '../components/Translator';
import PageTitle from '../components/PageTitle';
import IntroData from '../data/intro/Intro';
import IntroRow from '../components/IntroRow'
import Header from '../components/Header'
import {Layout, ContentLayout} from '../components/Layout'
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

    const content = IntroData[currentLanguage].map((item, index) => <IntroRow key={index} text={item}/>);

    return (
        <>
            <Header lang={currentLanguage}/>
            <Layout>
                <Translator lang={currentLanguage} handler={changeLanguage} />
                <ContentLayout>
                    <PageTitle title={title}/>
                    {content}
                </ContentLayout>
            </Layout>
            <Footer/>
        </>
    )
}

export default Home;