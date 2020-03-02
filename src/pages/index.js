import React from 'react';
import { Helmet } from 'react-helmet';
// import { Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { breakpoints } from '../components/Media';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Footer from '../components/footer';
import ProjectRow from '../components/ProjectRow';
import quotation from '../images/quotation.png';
import twitter from '../images/social/twitter.png';
import git from '../images/social/git.png';
import '../index.css';

const HeadingWrap = styled.div`
    padding-top: 40px;
    background-position: 0 0;
    background-repeat: no-repeat;
`;

const HeadingElements = styled.div`
    display: flex;
    align-items: center;
`;
const Line = styled.div`
    height: 2px;
    background-color: black;
    width: 100px;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 200px;
    }
`;

const SocialCont = styled.div`
    width: auto;
    height: auto;
    display: flex;
    margin-left: 20px;

    & .git {
        background-image: url(${git});
    }

    

    & .twitter {
        background-image: url(${twitter});
    }
`;
const Social = styled.div`
    width: 27px;
    height: 27px;
    margin: 0 15px;
    background-repeat: no-repeat;
    background-size: 27px 27px;
    background-position: center center;
    transition-duration: 2s;

    :hover {
        background-size: 30px;
    }
`;

const MaxHeading = styled(Heading)`
    font-weight: 900;
    font-size: 7vw;
    line-height: 129.69%;
    /* or 78px */
    letter-spacing: 0.03em;
    margin-bottom: 0;
    margin-left: 0px;

    @media (min-width: ${breakpoints.mobileMax}) {
        font-size: 60px;
        transform: scale(1);
        margin-bottom: 0;
        margin-left: 50px;
    }
`;

const Container = styled.div`
    margin: 100px 0 200px 0;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const SkillTable = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }

    p {
        color: black;
        font-weight: 700;
        min-width: 200px;
        margin: 20px 0 0 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            min-width: unset;
            margin: 30px 0;
        }

        span {
            font-size: 20px;
            margin-right: 5px;
            color: #b4e1e7;
        }
    }
`;

const SubContainer = styled.div`
    margin: 0px 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const TextContent = styled.div`
    max-width: 700px;
    .Paragraph {
        a {
            border-bottom: 2px solid transparent;
            transition: 0.3s;

            :hover {
                border-bottom: 2px solid black;
            }
        }
    }
`;

const TextContentWrap = styled(TextContent)`
    width: 100%;

    ${Paragraph} {
        margin: 40px 0px;
    }
    :nth-child(2) {
        ${Paragraph} {
            margin: 0px 0px;

            @media (min-width: ${breakpoints.mobileMax}) {
                margin: 40px 0;
            }
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
    }
`;

const SkillContent = styled.div`
    width: 100%;
`;


const SubParagraph = styled(Paragraph)`
    margin-top: 10px;
    max-width: unset;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 70%;
    }
`;

const Circle1 = styled.div`
    background: #f00;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    float: right;
    margin-right: 15%;
    margin-top: 5%
`;

const Circle2 = styled.div`
    background: blue;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    float: right;
    margin-right: 12%;
    margin-top: 5px;
    
`;




class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div >
                    <Circle1/>
                
                    <Circle2/>
                <Layout >
                    
                    <Helmet>
                        <title>
                            Steve Kibuika | kibuikaCodes
                        </title>
                        <meta
                            name='title'
                            content='Steve Kibuika | kibuikaCodes | Front-End Developer'
                        />
                        <meta
                            name='description'
                            content="I just code."
                        />
                        <meta property='og:type' content='website' />
                        <meta
                            property='og:url'
                            // content='https://juliacodes.com/'
                        />
                        <meta
                            property='og:title'
                            content='Steve Kibuika | kibuikaCodes | Front-End Developer'
                        />
                        <meta
                            property='og:description'
                            content="I just code."
                        />
                        {/* <meta property='og:image' content={LandingImage} /> */}
                        <meta
                            property='twitter:card'
                            content='summary_large_image'
                        />
                        <meta
                            property='twitter:url'
                            // content='https://juliacodes.com/'
                        />
                        <meta
                            property='twitter:title'
                            content='Steve Kibuika | kibuikaCodes | Front-End Developer'
                        />
                        <meta
                            property='twitter:description'
                            content="I just code."
                        />
                        <html lang='en' />
                    </Helmet>
                    
                    <Container >
                    
                        <HeadingWrap>
                        
                            <MaxHeading>
                               Hey, I’m Steve Kibuika. <br />
                                and I build things for the web.
                            </MaxHeading>
                            
                            <br />
                            <HeadingElements>
                                <Line />
                                <SocialCont>
                                    <a
                                        title='Github'
                                        target='_blank'
                                        rel='noreferrer'
                                        href='https://github.com/kibuikaCodes'
                                    >
                                        <Social className='git'></Social>
                                    </a>
                                    <a
                                        title='Twitter'
                                        target='_blank'
                                        rel='noreferrer'
                                        href='https://twitter.com/kibuikaCodes'
                                    >
                                        <Social className='twitter'></Social>
                                    </a>
                                </SocialCont>
                            </HeadingElements>
                        </HeadingWrap>
                    </Container>
                    <Container
                        style={{
                            alignItems: 'start',
                            margin: 0,
                            justifyContent: 'space-between',
                            marginTop: '-10em'
                        }}
                    >
                        {/* <TextContentWrap>
                            <Paragraph>
                                I am a passionate programmer with an eye for great user interfaces.
                                <br />
                                
                            </Paragraph>
                        </TextContentWrap>
                        <TextContentWrap>
                            <Paragraph>
                            As a developer, I have worked for and with great developers who have 
                                taught me how to build great Web Applications.
                            </Paragraph>
                        </TextContentWrap> */}
                    </Container>
                    <Container>
                        <SubContainer>
                            <SkillContent>
                                <TextContent>
                                    <Heading>My Skills</Heading>
                                </TextContent>
                                <SkillTable>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> HTML5
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> CSS3
                                        </Paragraph>
                                    </row>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> Javascript ES6
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> React
                                        </Paragraph>
                                    </row>
                                    
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> Git
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> NodeJS
                                        </Paragraph>
                                        
                                    </row>
                                </SkillTable>
                            </SkillContent>
                        </SubContainer>
                    </Container>
                    <SubContainer>
                        <TextContent>
                            <Heading>Projects I've worked on </Heading>
                            <SubParagraph>
                                With my skills I have worked on a couple of projects, some individually and others in a team. Have a look.
                            </SubParagraph>
                        </TextContent>
                    </SubContainer>
                    <SubContainer>
                        <ProjectRow />
                    </SubContainer>
                </Layout>
                <Footer instagramDisplay='flex' />
            </div>
        );
    }
}

export default Page;
