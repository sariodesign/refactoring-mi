import styled from 'styled-components';
import Nav from './Nav'

const HeaderContainer = styled.header`
    align-items: center;
    background-color: #eeeeee;
    border-bottom: 1px solid #cccccc;
    display: flex;
    justify-content: space-between;
    padding: 16px 8px;
`

const HeaderLogo = styled.div`
    font-family: 'Oswald';
    font-size: 24px;
    font-weight: 700
`

const Header = () => {

    return (
        <HeaderContainer>
            <HeaderLogo>Marco Iannaccone / Scarlet Lovejoy</HeaderLogo>
            <Nav/>
        </HeaderContainer>
    )
}

export default Header