import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import BackTop from './BackTop';

const ButtonTranslate = styled.div ` {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;

    span {
        background-color: #444;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        padding: 8px;
        text-transform: uppercase;
    }
}`

const Translator = (props) => {

    const containerRef = useRef(null)
    const [visibility, setVisibility] = useState(false);

    const callbackFunction = (entries) => {
        const [ entry ] = entries
        entry.isIntersecting ? setVisibility(false) : setVisibility(true)
    }
    const options = {
        root: null,
        rootMargin: "1000px",
        threshold:1.0
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)
        
        return () => {
            if(containerRef.current) observer.unobserve(containerRef.current)
            observer.disconnect()
        }
    }, [containerRef, options])

    let label;
    if(props.lang === 'it-IT'){
        label = 'Inglese'
    } else {
        label = 'Italian'
    }

    return (
        <>
            <ButtonTranslate onClick={props.handler} ref={containerRef}>
                <span id="translate-tab">{label}</span>
            </ButtonTranslate>
            <BackTop visibility={visibility} />
        </>
    )
}

export default Translator