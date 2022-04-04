import styled from 'styled-components';
import { useState } from 'react'

const Translator = (props) => {
    
    const ButtonTranslate = styled.div ` {
        background-color: #000;
        color: #fff;
        height: 40px;
        width: 40px;
    }`

    return <ButtonTranslate onClick={props.handler}>
        {props.label}
    </ButtonTranslate>
}

export default Translator