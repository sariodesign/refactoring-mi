import styled from 'styled-components';

const FooterContainer = styled.div `
    background-color: #000;
    color: #fff;
    padding: 8px;

    @media(min-width:1920px) {  
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }

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