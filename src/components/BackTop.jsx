import styled, { css } from 'styled-components';

const ScrollTop = styled.div `
  align-items: center;
  background-color: #444;
  border-radius: 50%;
  bottom: 120px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: center;
  position: fixed;
  transition: transform .25s ease-in-out;
  right: 24px;
  width: 56px;
  z-index: 3;
  ${(props) => {
    switch (props.visible) {
      case true:
        return css`
          transform: translateY(0);
        `;
      default:
        return css`
          transform: translateY(200px)
        `;
    }
  }}

`

const BackTop = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  return (
    <ScrollTop visible={props.visibility} onClick={scrollToTop}> 
      <svg height="32" width="32" viewBox="0 0 32 32">
        <path fill="#eee" d="M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z"></path>
      </svg>
    </ScrollTop>
  )
}

export default BackTop