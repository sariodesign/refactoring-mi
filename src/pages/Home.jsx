import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import Translator from '../components/Translator';
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

    const contentRef = useRef()

    useEffect(() => {
        gsap.from(contentRef.current, { 
            opacity: 0,
            duration: 2,
            ease: "power2.out"
        });
    });

    const content = IntroData[currentLanguage].map((item, index) => <IntroRow key={index}>{item}</IntroRow>);

    return (
        <>
            <Header />
            <Layout>
                <Translator lang={currentLanguage} handler={changeLanguage} />
                <div ref={contentRef}>
                    <h1>{title}</h1>
                    {content}
                </div>
            </Layout>
            <Footer/>
        </>
    )
}

export default Home;