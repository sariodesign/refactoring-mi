import BioData from '../data/bio/Bio'
import Header from '../components/Header'
import BioRow from '../components/BioRow'
import Footer from '../components/Footer'

const Bio = () => {

    let language = window.navigator.language
    console.log('Language',language)

    console.log('BioData', BioData)

    const content = BioData[1].english.map((item,index) => 
        <BioRow key={index} year={item.year} month={item.month} paragraphs={item.paragraphs}/>
    )

    return (
        <>
            <Header />
            <h1>Bio</h1>
            {content}
            <Footer/>
        </>
    )
}

export default Bio