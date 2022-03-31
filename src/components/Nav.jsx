import { Link } from "react-router-dom";
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Nav = () => {
    const [open, setOpen] = useState(false)
    const openClose = () => {
        setOpen(current => !current)
    }

    const slideAnimation = keyframes `
        from {
            transform: translateX(100%);
        }

        to {
            transform: translateX(0);
        }
    `

    const NavContainer = styled.div `

        nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            right: 0;
            top: 0;
            transform: translateX(100%);
            animation: ${slideAnimation} .25s cubic-bezier(1.000, 0.185, 0.645, 0.805) forwards;
            animation-direction: reverse;
            transition: transform .35s cubic-bezier(1.000, 0.185, 0.645, 0.805);
            width: 50%;
            z-index: 1;

            &[data-open="true"] {
                animation: ${slideAnimation} .25s cubic-bezier(1.000, 0.185, 0.645, 0.805) forwards;
                transition: transform .35s cubic-bezier(1.000, 0.185, 0.645, 0.805);
            }


            @media (min-width: 1024) {
                flex-direction: row;
                position: relative;
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

        button {
            position: relative;
            z-index: 2;

            @media (min-width: 1024px) {
                display: none
            }
        }
    `

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
            <button onClick={openClose}>Open/Close</button>
            <nav data-open={ open }>{routes}</nav>
        </NavContainer>
    );
}

export default Nav
  