import styled from 'styled-components';

const LayoutContainer = styled.div `
    padding: 32px 16px;
`

const Layout = (props) => {
    return (
       <LayoutContainer>
           {props.children}
       </LayoutContainer>
    )
}

export default Layout