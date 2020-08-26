import React from "react";
import styled from "styled-components";
import { breakpoints } from "../Media";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
// import kejaAfrica2 from '../../images/kejaAfrica2.png';
// import decore from '../../images/decore.jpg';
import tukData from "../../images/tukData.png";
import hackerNews from "../../images/hacker-news.png";
import netflixClone from "../../images/netflix-clone.png";

const ProjectContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 0px;
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
  margin-left: 0.5em;
  margin-right: 0.5em;

  :hover {
    ${ProjectImage} {
      transform: scale(1.01);
    }

    ${ProjectLink} {
      border-bottom: 2px solid black;
    }
  }

  :nth-child(1) {
    margin-right: 0;

    @media (min-width: ${breakpoints.mobileMax}) {
      margin-right: 0;
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
      background-repeat: none;
    }
  }

  :nth-child(2) {
    ${ProjectImage} {
      background-image: url(${hackerNews});
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      background-repeat: none;
    }
  }

  :nth-child(3) {
    ${ProjectImage} {
      background-image: url(${netflixClone});
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
          An API data source for weather data within The Technical University Of
          Kenya.
        </ProjectParagraph>
        <a
          title="tukData"
          href="https://tukdataweb.netlify.com/"
          target="_blank"
          rel="noopener"
        >
          <ProjectLink>
            View Project <span>&#8250;</span>
          </ProjectLink>
        </a>
      </Project>
      <Project>
        <ProjectImage />
        <SubHeading>Hacker News Website</SubHeading>
        <ProjectParagraph>
          A website that uses the hacker-news API to display tech articles in
          the hacker news database.
        </ProjectParagraph>
        <a
          title="Hacker News"
          href="https://hacker-news-kibuika.netlify.app/"
          target="_blank"
          rel="noopener"
        >
          <ProjectLink>
            View Project <span>&#8250;</span>
          </ProjectLink>
        </a>
      </Project>
      <Project>
        <ProjectImage />
        <SubHeading>Netflix Clone</SubHeading>
        <ProjectParagraph>
          A front-end build for the Netflix UI. I have always wanted to work
          with image data and this was fun to work with. I plan to use the same
          TMDB API to build another movie website both front-end and back-end.
        </ProjectParagraph>
        <a
          title="Netflix Clone (Front-End)"
          href="https://kibuika-netflix-clone.netlify.app/"
          target="_blank"
          rel="noopener"
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
