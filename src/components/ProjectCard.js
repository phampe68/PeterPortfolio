import "../styling/ProjectCard.css";
import Colors from '../styling/colors.json';
import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ProjectCard = (props) => {
    let carouselImages = [];

    // generate carousel images
    for (let image of props.Images) {
        carouselImages.push(
            <div>
                <img src={image} alt="carousel image"/>
            </div>)
    }

    // generate description points
    let descriptions = [];
    for (let point of props.Description) {
        descriptions.push(<li>{point}</li>);
    }
    return (
        <div className="ProjectCardContainer" style={{
            backgroundImage: "linear-gradient(to right ," + Colors[props.color]["100"] + "," + Colors[props.color]["900"] + ")"
        }}>
            <div className="CarouselContainer" style={{
                backgroundImage: "linear-gradient(to right ," + Colors[props.color]["a700"] + "," + Colors[props.color]["a200"] + ")"
            }}>
                <Carousel showArrows={true} showIndicators={true} showThumbs={false} autoPlay={true}
                          infiniteLoop={true}>
                    {carouselImages}
                </Carousel>
            </div>
            <div className="ProjectDescriptionContainer">
                <h1>{props.ProjectName}</h1>
                <hr style={{
                    backgroundColor: Colors[props.color]["a100"],
                    height: "2px",
                    border: 0,
                    width: "98%",
                    marginLeft: 0
                }}/>

                <ul>
                    {descriptions}
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;
