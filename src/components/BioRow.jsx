import styled from 'styled-components';

const BioRowTitle = styled.h2 `
    border-bottom: 1px solid #333;
    color: #333;
    font-family: 'Oswald';
    font-size: 20px;
    margin: 0 0 16px;
    padding-bottom: 4px;
    text-align: right;
`

const BioRowContent = styled.div `
    display: flex;
    flex-direction: column;

    h3 {
        font-family: 'Oswald';
        font-size: 16px;
        margin: 0 0 8px;
    }

    p {
        font-family: 'Open sans';
        font-size: 16px;
        line-height: 30px;
        margin: 0 0 16px;
    }
`

const BioRow = (props) => {

    const year = props.year
    const month = props.month
    const paragraphs = props.paragraphs

    const text = paragraphs.map((p,i) =>
        <p key={i} >{p}</p>
    );
    
    return (
        <BioRowContent>
            { year && <BioRowTitle>{year}</BioRowTitle> }
            { month && <h3>{month}</h3>}
            { text }
        </BioRowContent>
    )
}

export default BioRow