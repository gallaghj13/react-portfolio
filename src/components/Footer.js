import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
    <footer className="footerContainer" id="contact-me">
        {/* <h2>Contact </h2> */}
        <ul>
            <li>717-989-3931</li>
            <li>gallagherj0913@gmail.com</li>
            <li><a href="https://github.com/gallaghj13" target="_blank" rel="noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/john-gallagher-122b86100/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
    </footer>
    );
};

export default Footer;