import styled from 'styled-components';

const LayoutContainer = styled.div `
    padding: 0 16px;
`

const Layout = (props) => {
    return (
       <LayoutContainer>
           {props.children}
       </LayoutContainer>
    )
}

export default Layout