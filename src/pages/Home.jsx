import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import Translator from '../components/Translator';
import PageTitle from '../components/PageTitle';
import IntroData from '../data/intro/Intro';
import IntroRow from '../components/IntroRow'
import Header from '../components/Header'
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

    const content = IntroData[currentLanguage].map((item, index) => <IntroRow key={index} text={item}/>);

    return (
        <>
            <Header />
            <Layout>
                <Translator lang={currentLanguage} handler={changeLanguage} />
                <PageTitle title={title}/>
                {content}
            </Layout>
            <Footer/>
        </>
    )
}

export default Home;