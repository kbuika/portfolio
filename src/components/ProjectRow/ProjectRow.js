import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../Media';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import kejaAfrica2 from '../../images/kejaAfrica2.png';
// import decore from '../../images/decore.jpg';
import tukData from "../../images/tukData.png";

const ProjectContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0px;
    flex-wrap: wrap;
    margin-top: 0px;
    height: unset;
    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        margin-bottom: 70px;
        margin-top: 40px;
        height: 500px;
    }
`;

const ProjectLink = styled(Paragraph)`
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: black;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s;

    :hover {
        border-bottom: 2px solid black;
    }

    span {
        font-size: 20px;
    }
`;

const ProjectImage = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 4px;
    transition-duration: 0.3s;
`;

const Project = styled.div`
    width: 100%;
    height: 450px;
    margin-bottom: 90px;
    transition-duration: 0.3s;

    :hover {
        ${ProjectImage} {
            transform: scale(1.03);
        }

        ${ProjectLink} {
            border-bottom: 2px solid black;
        }
    }

    :nth-child(1) {
        margin-right: 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            margin-right: 10%;
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
        margin-bottom: 0px;
    }

    :nth-child(1) {
        ${ProjectImage} {
            background-image: url(${tukData});
            background-size: cover;
            background-position-x: center;
            background-position-y: center;
        }
    }

    :nth-child(2) {
        ${ProjectImage} {
            background-image: url(${kejaAfrica2});
            background-size: cover;
            background-position-x: center;
            background-position-y: center;
        }
    }
`;

const SubHeading = styled(Heading)`
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 30px;
`;

const ProjectParagraph = styled(Paragraph)`
    margin-top: 10px;
    max-width: 80%;
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 70%;
    }
`;

function ProjectRow() {
    return (
        <ProjectContainer>
            <Project>
                    <ProjectImage />
                    <SubHeading>TU-K Data</SubHeading>
                <ProjectParagraph>
                    An API data source for weather data within The Technical University Of Kenya.
                </ProjectParagraph>
                <a
                    title='tukData'
                    href='https://tukdataweb.netlify.com/'
                    target='_blank'
                    rel="noopener noreferrer"
                    >
                    <ProjectLink>
                        View Project <span>&#8250;</span>
                    </ProjectLink>
                </a>
            </Project>
            <Project>
                    <ProjectImage />
                    <SubHeading>Keja.Africa</SubHeading>
                <ProjectParagraph>
                    I am part of a team that is building a House Listing website that uses an algorithm 
                    to provide specialised house recommendations for people in and around Nairobi.
                </ProjectParagraph>
                <a
                    title='keja.africa'
                    href='https://keja.africa/'
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <ProjectLink>
                        View Project <span>&#8250;</span>
                    </ProjectLink>
                </a>
                    
            </Project>
        </ProjectContainer>
    );
}

export default ProjectRow;
