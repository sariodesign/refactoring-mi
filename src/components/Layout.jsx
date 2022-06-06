import styled from 'styled-components';

const Container = styled.div `
    padding: 32px 16px;

    @media(min-width: 1024px) {
        padding: 32px;
    }

`

const InnerContainer = styled.div `
    margin: 0 auto;
    max-width: 1200px;
`

const ContentLayout = (props) => {
    return (
        <InnerContainer>
            {props.children}
        </InnerContainer>
    )
}

const Layout = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export { ContentLayout, Layout }