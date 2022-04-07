import { CSSTransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const LayoutContainer = styled.div `
    padding: 32px 16px;

    @media(min-width: 1024px) {
        padding: 32px;
    }
`

const Layout = (props) => {
    return (
       <LayoutContainer>
        <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {props.children}
        </CSSTransitionGroup>
       </LayoutContainer>
    )
}

export default Layout