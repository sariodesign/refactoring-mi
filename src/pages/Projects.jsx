import styled from 'styled-components';
import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from 'react';
import Translator from '../components/Translator';
import PageTitle from '../components/PageTitle';
import Header from '../components/Header'
import {Layout, ContentLayout} from '../components/Layout'
import ProjectsData from '../data/projects/Projects';
import Card from '../components/Card';
import Footer from '../components/Footer'

const ProjectsContainer = styled.section `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;

    a {
        text-decoration: none;

        @media (min-width: 1024px) {
            width: 25%;
        }
    }
`

const Projects = (props) => {
    const [currentLanguage, setLanguage] = useState(props.lang)
    const [title, setTitle] = useState(() => currentLanguage === 'it-IT' ? 'Progetti' : 'Projects');

    const changeLanguage = () => {
        
        if(currentLanguage === 'it-IT'){
            setLanguage('en-EN')
            setTitle('Projects')
        } else {
            setLanguage('it-IT')
            setTitle('Progetti')
        }
    }

    const content = ProjectsData[currentLanguage].map((item, index) => 
        <NavLink key={index} to={item.path}>
            <Card source={item.source} title={item.title} abstract={item.abstract}/>
        </NavLink>
    )

    return (
        <>
            <Header lang={currentLanguage}/>
            <Layout>
                <Translator lang={currentLanguage} handler={changeLanguage} />
                <ContentLayout>
                    <PageTitle title={title}/>
                    <ProjectsContainer>
                        {content}
                    </ProjectsContainer>
                </ContentLayout>
            </Layout>
            <Footer/>
        </>
    )
}

export default Projects;