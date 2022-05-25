import React from 'react';
import '../../styles/About.css';
import headshot from '../../images/headshot.png'

export default function About() {
    return (
        <div className="aboutContainer">
            <div>
                <p>
                   Full stack web developer with experience in JavaScript, HTML, CSS, SQL, and MERN stack. Recently earned a certificate in full stack development with a focus on JavaScript from the University of Denver. Interested in the back end of applications and working with data, but also feel comfortable working on the front end of applications. With a college background in Economics and management experience in a restaurant, I have always excelled in critical thinking and problem solving. I'm not only interested in finding a solution, but rather the best, most efficient solution. I am drawn to coding because it promises to keep changing, allowing me to continue to learn and grow as a developer.
                </p>
            </div>

            <div className="imgContainer">
                <img src={headshot} alt="Headshot of the creator of this page"/>
            </div>
        </div>
    );
};