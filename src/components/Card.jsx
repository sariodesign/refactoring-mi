import styled from 'styled-components';

const CardContainer = styled.div `
    border: 1px solid #666;
    border-radius: 8px;
    cursor: pointer;

    h2 {
        font-family: 'Oswald';
        margin: 0 0 16px;
        font-size: 14px;
        text-transform: uppercase;
    }

    p {
        font-family: 'Open Sans';
        font-size: 16px;
        line-height: 24px;
        margin: 0;
    }
`

const Card = (props) => {

    return <CardContainer>
        <figure>
            <img src={props.source} />
        </figure>
        <h2>{ props.title }</h2>
        <p>{ props.text }</p>
    </CardContainer>
}

export default Card;