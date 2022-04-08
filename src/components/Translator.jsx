import styled from 'styled-components';

const ButtonTranslate = styled.div ` {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;

    span {
        background-color: #222;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        padding: 8px;
        text-transform: uppercase;
    }
}`

const Translator = (props) => {

    let label;
    if(props.lang === 'it-IT'){
        label = 'Inglese'
    } else {
        label = 'Italian'
    }

    return <ButtonTranslate onClick={props.handler}>
        <span>{label}</span>
    </ButtonTranslate>
}

export default Translator