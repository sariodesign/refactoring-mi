import styled from 'styled-components';

const Card = (props) => {
    const CardContainer = styled.div `
        border: 1px solid #666;
        border-radius: 8px;
    `
    return <CardContainer>
        <figure>
            <img src={} />
        </figure>
        { props.text }
    </CardContainer>
}

export default Card;