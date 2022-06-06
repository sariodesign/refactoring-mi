import styled from 'styled-components';

const CardContainer = styled.div `
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 24px;
`

const CardImage = styled.figure `
    margin: 0;

    img {
        border: 0;
        border-radius: 4px 4px 0 0;
        max-width: 100%;
        vertical-align: top
    }
`

const CardText = styled.div `
    h2 {
        color: #000;
        font-family: 'Oswald';
        font-size: 14px;
        margin: 0 0 16px;
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
        <CardImage>
            <img src={props.source} />
        </CardImage>
        <CardText>
            <h2>{ props.title }</h2>
            <p>{ props.text }</p>
        </CardText>
    </CardContainer>
}

export default Card;