import React from 'react';
import '../../styles/Resume.css';
import resume from '../../images/Resume.pdf'

function Resume() {
    return (
        <div className="resumeContainer">
            <div className="resumeSectionHeader">
                <h1>John Gallagher</h1>
                <h2>Software Engineer</h2>
            </div>
            <div className="resumeBody">
                <div className="resumeSection">
                    <h1>Education</h1>
                    <div>
                        <h2>University of Denver</h2>
                        <p>Full Stack Web Development Certificate</p>
                        <p>2021-2022</p>
                    </div>
                    <div>
                        <h2>Dickinson College</h2>
                        <p>BA in Economics</p>
                        <p>2009-2013</p>
                    </div>
                    <div>
                        <h1>Work</h1>
                        <div>
                            <h2>Dark Horse Bar</h2>
                            <p>Manager and Bartender</p>
                            <p>2015-Present</p>
                        </div>
                    </div>
                </div>

                <div className="resumeSection">
                    <h1>Technical</h1>
                    <div>
                        <h2>Languages:</h2>
                        <p>HTML, CSS, JavaScript, SQL(MySQL), MongoDB, GraphQL</p>
                    </div>
                    <div>
                        <h2>Libraries:</h2>
                        <p>Bootstrap, Bulma, JQuery, Mongoose, Sequelize, Node, Express, React</p>
                    </div>
                    <div>
                        <h2>Applications:</h2>
                        <p>Github, Heroku, Insomnia, MongoDB Compass, MongoDB Atlas, Npm</p>
                    </div>
                </div>
            </div>
            <div className="resumeBtn">
                    <div>
                        <a href={resume}>Full Resume</a>
                    </div>
            </div>
        </div>
    )

}

export default Resume;