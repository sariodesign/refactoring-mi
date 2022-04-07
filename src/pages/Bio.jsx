import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import Translator from '../components/Translator';
import BioData from '../data/bio/Bio';
import Layout from '../components/Layout';
import Header from '../components/Header'
import BioRow from '../components/BioRow'
import Footer from '../components/Footer'

const Bio = (props) => {
    //const [fadeAnimation, setFadeAnimation] = useState(false)
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
        //setFadeAnimation(fadeAnimation => !fadeAnimation)
    }
    
    const contentRef = useRef()

    useEffect(() => {
        gsap.from(contentRef.current, { 
            opacity: 0,
            duration: 2,
            ease: "power2.out"
        });
    });

    const content = BioData[currentLanguage].map((item,index) => 
        <BioRow key={index} year={item.year} month={item.month} paragraphs={item.paragraphs}/>
    )    

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

export default Bio