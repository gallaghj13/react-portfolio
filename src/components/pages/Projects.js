import React from 'react';
import marvel from '../../images/marvelbackground.jpg';

function Projects() {
    return (
        <div>
            <div>   
                <a href="https://carlincb.github.io/Marvel_Project_1/" target="_blank" rel="noreferrer" className="project-1 project">
                <img id="larger-img" src={marvel} alt="Marvel Superheroes"/>
                <h3>Marvel Fan Page</h3> 
                </a>
            </div>
            <div>
                <a href="https://gallaghj13.github.io/Daily-Planner-App/" target="_blank" rel="noreferrer" className="project">
                <img src="./assets/images/Work-Day-App.jpeg" alt="Shows the date and time slots to add tasks." />
                <h3>Daily Planner App</h3>
                </a>
            </div>
            <div>
                <a href="https://gallaghj13.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer" className="project">
                <img src="./assets/images/Weather-App.jpeg" alt="Website displaying the current weather and a five day forecast for Boulder, Colorado." />
                <h3>Weather App</h3>
                </a>
            </div>
            <div>
                <a href="placeholder4" target="_blank" rel="noreferrer" className="project">
                <img src="./assets/images/350x150.png" alt="This is a placeholder." />
                <h3>Project-4</h3>
                </a>
            </div>
            <div>
                <a href="placeholder4" target="_blank" rel="noreferrer" className="project">
                <img src="./assets/images/350x150.png" alt="This is a placeholder." />
                <h3>Project-5</h3>
                </a>
            </div>
            <div>
                <a href="placeholder4" target="_blank" rel="noreferrer" className="project">
                <img src="./assets/images/350x150.png" alt="This is a placeholder." />
                <h3>Project-6</h3>
                </a>
            </div>
        </div>
    );
};

export default Projects;