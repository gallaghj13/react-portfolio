import React from 'react';
import marvel from '../../images/marvelbackground.jpg';

export default function Projects() {
    return (
        <div>   
            <a href="https://carlincb.github.io/Marvel_Project_1/" target="_blank" rel="noreferrer" className="project-1 project">
            <img id="larger-img" src={marvel} alt="Marvel Superheroes"/>
            <h3>Marvel Fan Page</h3> 
            </a>
        </div>
    )
}