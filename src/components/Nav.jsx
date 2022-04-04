import { Link } from "react-router-dom";
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

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
        animation: none;
        display: flex;
        flex-direction: column;
        position: fixed;
        right: 0;
        top: 0;
        transform: translateX(100%);
        transition: transform .35s cubic-bezier(1.000, 0.185, 0.645, 0.805);
        width: 50%;
        z-index: 1;

        &[data-open="true"] {
            animation: ${slideIn} .25s cubic-bezier(1.000, 0.185, 0.645, 0.805) forwards;
        }

        &[data-open="false"] {
            animation: ${slideOut} .25s cubic-bezier(1.000, 0.185, 0.645, 0.805) forwards;
        }
        
        @media (min-width: 1024) {
            animation: none;
            flex-direction: row;
            position: relative;
            transform: none;
            width: auto;
        }
    }

    a {
        color: #333;
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

        @media (min-width: 1024) {
            margin-right: 8px;
            margin-bottom: 0;
        }
    }

`

const Opener = (props) => {

    const ButtonOpener = styled.button ` {
        align-items: center;
        webkit-appearance: none;
        appeareance: none;
        background-color: #333;
        border: 0;
        border-radius: 50%;
        box-shadow: 0 0 2px 2px #333;
        bottom: 32px;
        cursor: pointer;
        display: flex;
        height: 40px;
        justify-content: center;
        position: fixed;
        right: 32px;
        width: 40px;
        z-index: 2;

        span {
            background-color: #fff;
            height: 2px;
            pointer-events: none;
            position: relative;
            width: 32px;

            &:before,
            &:after {
                background-color: #fff;
                content: '';
                height:100%;
                width: 100%;
                position: absolute;
                top: ${props => props.active ? "-6px" : "0px"};
                left: 0;
                transition: all .25s ease-in-out;
            }

            &:after {
                top: ${props => props.active ? "6px" : "0px"}
            }
        }

        @media (min-width: 1024px) {
            display: none
        }`

    return (
        <ButtonOpener onClick={props.handler} active={open}>
            <span></span>
        </ButtonOpener>
    )
}

const Nav = () => {
    const [open, setOpen] = useState(null)
    const openClose = (e) => {
        setOpen(current => !current)
        activeState()
    }

    const links = [
        { id: 1, to: '/', label: 'Home' },
        { id: 2, to: '/bio', label: 'Bio' },
        { id: 3, to: '/project', label: 'Project' },
        { id: 4, to: '/performance', label: 'Performance' },
        { id: 5, to: '/press', label: 'Press' },
        { id: 6, to: '/contact', label: 'Contact' }
    ];
    const routes = links.map((link) =>
        <Link key={link.id} to={link.to}>{link.label}</Link>
    );
    return (
        <NavContainer>
            <Opener handler={ openClose } open={ false }/>
            <nav data-open={ open }>{routes}</nav>
        </NavContainer>
    );
}

export default Nav
  