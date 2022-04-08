import styled from 'styled-components';

const Title = styled.h1`
  margin: 0 0 16px
`

const PageTitle = (props) => {
  return (
    <Title>{props.title}</Title>
  )
}


export default PageTitle