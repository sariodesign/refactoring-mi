import { Routes, Route, Link } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'

const Performance = () => {
    const lang = window.navigator.language

    return (
        <>
            <Header lang={lang}/>
            <h1>Performance</h1>
            <Footer/>
        </>
    )
}

export default Performance;