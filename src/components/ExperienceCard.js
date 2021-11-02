import React from "react";
import Colors from '../styling/colors.json';
import '../styling/ExperienceCard.css'

const ExperienceCard = (props) => {
    let descriptionPoints = [];
    for (let description of props.description) {
        descriptionPoints.push(<li>{description}</li>);
    }


    return (
        <div className="ExperienceCard"
             style={{
                 backgroundImage: "linear-gradient(to right ," + Colors[props.color]["200"] + "," + Colors[props.color]["700"] + ")"
             }}>
            <div className="logoContainer">
                <img id="logo" src={props.logo} alt="Logo image"/>
            </div>

            <div className="ExperienceCardDescription">
                <div className="TitleContainer">
                    <h1>{props.positionName}</h1>
                    <h3 id="duration">{props.duration}</h3>
                </div>

                <hr style={{
                    backgroundColor: Colors[props.color]["900"],
                    height: "2px",
                    border: 0,
                    width: "98%",
                    marginLeft: 0
                }}/>

                <div className="SubtitleContainer">
                    <h3 id="companyName">{props.companyName}</h3>
                    <h3 id="location">{props.location}</h3>
                </div>

                <div className="DescriptionContainer">
                    <ul>
                        {descriptionPoints}
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default ExperienceCard;
