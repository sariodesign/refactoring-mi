import styled from 'styled-components';

const FooterContainer = styled.div `
    background-color: #000;
    color: #fff;
    padding: 8px;

    p {
        margin: 0;
    }
`

const Footer = () => {
    return <FooterContainer>
        <p>2022&copy;</p>
    </FooterContainer>
}

export default Footer