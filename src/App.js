import './App.css';
import './styling/Index.css';
import pickColors from "./styling/colorPicker";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import Experience from "./data/experience.json";
import Projects from "./data/projects.json";

import Slide from 'react-reveal/Slide';
import React from "react";
import ParticlesBg from "particles-bg";
import Fab from "@mui/material/Fab";
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import Resume from "./data/resume.pdf";

function App() {
    // get random color
    const globalColors = pickColors();

    // generate experience cards
    let experienceCards = [];
    for (let [, v] of Object.entries(Experience)) {
        v['color'] = globalColors[0];
        experienceCards.push(<ExperienceCard {...v}/>)
    }

    // generate project cards
    let projectCards = [];
    for (let [, v] of Object.entries(Projects)) {
        v['color'] = globalColors[0];
        projectCards.push(<ProjectCard {...v} />)
    }
    return (
        <div className="mainContainer">
            <div className="LandingContainer" style={{backgroundColor: globalColors[1]["300"]}}>
                <Fab color="primary" variant="extended" aria-label="add"
                     style={{
                         zIndex: 1, position: "fixed", top: "50px", right: "50px",
                         backgroundColor: globalColors[1]["900"]
                     }}
                     onClick={() => window.location.reload(false)}>
                    <FormatPaintIcon/> New Colors
                </Fab>
                <Slide bottom>
                    <div className="LandingTextContainer" style={{zIndex: 1}}>


                        <h1 style={{color: globalColors[1]["900"]}}>Peter Pham</h1>
                        <hr style={{
                            backgroundColor: globalColors[1]["600"],
                            height: "3px",
                            border: 0
                        }}/>
                        <p style={{
                            color: globalColors[1]["900"],
                            fontSize: "20px"
                        }}>
                            4th Year Computer Science Student @Carleton University /
                            Software Engineering Intern @MongoDB
                        </p>

                        <div className="LinksContainer">
                            <p>
                                <a href="https://github.com/phampe68" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                                <a href="https://www.linkedin.com/in/peter-pham01" target="_blank"
                                   rel="noreferrer"><LinkedInIcon/></a>
                                <a href="mailto:PeterPham68@gmail.com"><EmailIcon/></a>
                                <a href={Resume} target="_blank" rel="noreferrer"><DescriptionIcon/></a>
                            </p>
                        </div>
                    </div>
                </Slide>
                <ParticlesBg id="mainParticlePG" type="cobweb" color={globalColors[1]["900"]} bg={{
                    position: "absolute",
                    zIndex: 0,
                    top: 0,
                    left: 0
                }
                }/>
            </div>

            <div className="Experience" style={{backgroundColor: globalColors[1]["200"]}}>
                <h1 style={{color: globalColors[1]["800"], fontSize: "50px", marginBottom: 0}}> Experience </h1>
                <hr style={{
                    backgroundColor: globalColors[1]["600"],
                    height: "3px",
                    border: 0,
                    width: "20%",
                }}/>
                <Slide left>
                    {experienceCards}
                </Slide>

            </div>

            <div className="Projects" style={{backgroundColor: globalColors[1]["300"]}}>
                <h1 style={{color: globalColors[1]["800"], fontSize: "50px", marginBottom: 0}}> Projects </h1>
                <hr style={{
                    backgroundColor: globalColors[1]["600"],
                    height: "3px",
                    border: 0,
                    width: "20%",
                    marginBottom: "30px"
                }}/>
                <Slide right>
                    {projectCards}

                </Slide>
            </div>
        </div>
    );
}


export default App;
