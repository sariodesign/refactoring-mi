import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import styled from 'styled-components';

const Row = styled.p `
    font-size: 16px;
    line-height: 26px;
    margin: 0 0 16px;
`
const IntroRow = (props) => {
    const el = useRef()
    
    useEffect(() => {
        gsap.from(el.current, {
            clearProps: "opacity", 
            opacity: 0,
            y: "10",
            duration: 1,
            ease: "power2.out"
        });
    }); 

    return (
        <Row ref={el}>{props.text}</Row>
    )
}

export default IntroRow;