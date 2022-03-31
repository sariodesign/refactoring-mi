import BioData from '../data/bio/Bio'
import Nav from '../components/Nav'
import BioRow from '../components/BioRow'
import Footer from '../components/Footer'

const Bio = () => {

    const content = BioData.map((item,index) => 
        <BioRow key={index} year={item.year} month={item.month} paragraphs={item.paragraphs}/>
    )

    return (
        <>
            <Nav />
            <h1>Bio</h1>
            {content}
            <Footer/>
        </>
    )
}

export default Bio