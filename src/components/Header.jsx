import styled from 'styled-components';
import Nav from './Nav'

const HeaderContainer = styled.header`
    align-items: center;
    background-color: #eeeeee;
    border-bottom: 1px solid #cccccc;
    display: flex;
    justify-content: space-between;
    padding: 16px;

    @media(min-width: 1024px) {
        padding: 32px;
    }
`

const HeaderLogo = styled.div`
    font-family: 'Oswald';
    font-size: 24px;
    font-weight: 700
`

const Header = (props) => {

    return (
        <HeaderContainer>
            <HeaderLogo>Marco Iannaccone / Scarlet Lovejoy</HeaderLogo>
            <Nav lang={props.lang}/>
        </HeaderContainer>
    )
}

export default Header