import styled from 'styled-components';

const BioRow = (props) => {
    const BioRowTitle = styled.h2 `
        font-family: 'Oswald';
        font-size: 16px;
        margin: 0 0 8px;
        position: sticky;
        text-align: right;
        top: 0;
    `

    const BioRowContent = styled.div `
        display: flex;
        flex-direction: column;

        h2, h3 {
            font-family: 'Oswald';
            font-size: 16px;
            margin: 0 0 8px;
        }

        p {
            font-family: 'Open sans';
            font-size: 14px;
            line-height: 18px;
            margin: 0 0 16px;
        }
    `

    const year = props.year
    const month = props.month
    const paragraphs = props.paragraphs

    const text = paragraphs.map((p,i) =>
        <p key={i} >{p}</p>
    );
    
    return (
        <> 
            { year && <BioRowTitle>{year}</BioRowTitle> }
            <BioRowContent>
            <h3>{month}</h3>
            { text }
            </BioRowContent>
        </>
    )
}

export default BioRow