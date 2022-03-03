import React from 'react';
import '../../styles/Project.css';
import marvel from '../../images/marvelbackground.jpg';
import weatherImg from '../../images/Weather-App.jpeg';
import workdayImg from '../../images/Work-Day-App.jpeg';
import gamersConnect from '../../images/homepagePic.png';
import employeeImg from '../../images/employeeTracker.png';
import textEditorImg from '../../images/textEditor.png'

function Projects() {
    return (
        <div className="projectContainer">
            <div className="card" style={{width: "18rem", border: "10px solid #05386B"}}>
                <img src={marvel} className="card-img-top" alt="Marvel Superheroes" />
                <div className="card-body">
                <h5 className="card-title">Marvelisms</h5>
                <p className="card-text">The goal of this project was to create a website that would link fans to marvel resources using the Marvel API.</p>
                <a href="https://carlincb.github.io/Marvelisms/" target="_blank" rel="noreferrer" className="btn btn-primary">Deployed Site</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem", border: "10px solid #05386B"}}>
                <img src={weatherImg} className="card-img-top" alt="Website displaying the current weather and a five day forecast for Boulder, Colorado." />
                <div className="card-body">
                <h5 className="card-title">Weather App</h5>
                <p className="card-text">The goal of this project was to create a weather app that would display a forecast for a given city using the OpenWeather API.</p>
                <a href="https://gallaghj13.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer" className="btn btn-primary">Deployed Site</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem", border: "10px solid #05386B"}}>
                <img src={workdayImg} className="card-img-top" alt="Shows the date and time slots to add tasks." />
                <div className="card-body">
                <h5 className="card-title">Daily Planner App</h5>
                <p className="card-text">The goal of this project was to create a daily planner app that would allow the user to to add events to given time slots.</p>
                <a href="https://gallaghj13.github.io/Daily-Planner-App/" target="_blank" rel="noreferrer" className="btn btn-primary">Deployed Site</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem", border: "10px solid #05386B"}}>
                <img src={gamersConnect} className="card-img-top" alt="Homepage for a gaming blog." />
                <div className="card-body">
                <h5 className="card-title">Gamers Connect</h5>
                <p className="card-text">The goal of this project was to create a blog for gamers to connect and talk about their favorite games.</p>
                <a href="https://enigmatic-shore-17530.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">Deployed Site</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem", border: "10px solid #05386B"}}>
                <img src={employeeImg} className="card-img-top" alt="Shows the initial prompt given by the app in the terminal." />
                <div className="card-body">
                <h5 className="card-title">Employee Tracker App</h5>
                <p className="card-text">The goal of this project was to create a back end application using Node that would resemble and track a company's employee database.</p>
                <a href="https://github.com/gallaghj13/Employee-Tracker" target="_blank" rel="noreferrer" className="btn btn-primary">Github Repo</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem", border: "10px solid #05386B"}}>
                <img src={textEditorImg} className="card-img-top" alt="Shows a text editor with a logo for the site." />
                <div className="card-body">
                <h5 className="card-title">Text Editor App</h5>
                <p className="card-text">The goal of this project was to create a text editor that meets the requirements of a Progressive Web Application(PWA).</p>
                <a href="https://afternoon-wildwood-43193.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">Deployed Site</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;