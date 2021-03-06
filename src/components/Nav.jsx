import { Link } from "react-router-dom";
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import NavLinks from '../data/routes/Navigation';

// Create keyframes
const slideIn = keyframes `
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }
`

const slideOut = keyframes `
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100%);
    }
`

// Nav style
const NavContainer = styled.div `

    nav {
        align-items: center;
        animation: none;
        background-color: rgba(0,0,0,.9);
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 40px 0;
        position: fixed;
        right: 0;
        top: 0;
        transform: translateX(100%);
        transition: transform .35s cubic-bezier(1.000, 0.185, 0.645, 0.805);
        width: 90%;
        z-index: 1;

        &[data-open="true"] {
            animation: ${slideIn} .25s cubic-bezier(1.000, 0.185, 0.645, 0.805) forwards;
        }

        &[data-open="false"] {
            animation: ${slideOut} .25s cubic-bezier(1.000, 0.185, 0.645, 0.805) forwards;
        }
        
        @media (min-width: 1024px) {
            animation: none;
            background-color: transparent;
            flex-direction: row;
            height: auto;
            position: relative;
            transform: none;
            width: auto;
        }
    }

    a {
        color: #fff;
        font-family: 'Oswald';
        font-weight: 700;
        margin-bottom: 8px;
        text-decoration: none;
        text-transform: uppercase;
        transition: opacity .2s linear;

        &:hover {
            opacity: .75
        }

        &:last-child {
            margin: 0
        }

        @media (min-width: 1024px) {
            color: #222;
            margin-right: 8px;
            margin-bottom: 0;
        }
    }

`

const ButtonOpener = styled.button ` {
    align-items: center;
    webkit-appearance: none;
    appeareance: none;
    background-color: #333;
    border: 0;
    border-radius: 50%;
    bottom: 48px;
    cursor: pointer;
    display: flex;
    height: 48px;
    justify-content: center;
    position: fixed;
    right: 24px;
    transition: all .25s ease-in-out;
    width: 48px;
    z-index: 2;

    span {
        background-color: ${props => props.active ? "#333" : "#fff"};
        height: 2px;
        pointer-events: none;
        position: relative;
        width: 24px;

        &:before,
        &:after {
            background-color: #fff;
            content: '';
            height:100%;
            width: 100%;
            position: absolute;
            top: ${props => props.active ? "0px" : "-6px"};
            transform: ${props => props.active ? "rotate(45deg)" : "rotate(0)"};
            left: 0;
            transition: all .25s ease-in-out;
        }

        &:after {
            top: ${props => props.active ? "0px" : "6px"};
            transform: ${props => props.active ? "rotate(-45deg)" : "rotate(0)"};
        }
    }

    @media (min-width: 1024px) {
        display: none
    }
}`

const Opener = (props) => {

    return (
        <ButtonOpener onClick={props.handler} active={props.active}>
            <span></span>
        </ButtonOpener>
    )
}

const Nav = () => {
    const lang = window.navigator.language
    const [open, setOpen] = useState(null)
    const [active, activeState] = useState(null)
    const openClose = (e) => {
        setOpen(current => !current)
        activeState(current => !current)
    }

    const routes = NavLinks[lang].map((link) =>
        <Link key={link.id} to={link.to}>{link.label}</Link>
    );
    return (
        <NavContainer>
            <Opener handler={ openClose } active={ active }/>
            <nav data-open={ open }>{routes}</nav>
        </NavContainer>
    );
}

export default Nav
  