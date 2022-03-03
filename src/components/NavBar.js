import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  linkStyle: {
    textDecoration: 'none'
  }
}

function NavBar ({ currentPage, handlePageChange }) {
    return (
        <ul className="nav justify-content-end">
         <Link to="/about"
         style={style.linkStyle}> 
         <li className="nav-item">
         <a
            href="/about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
          </li>
          </Link>
          <Link to="/projects"
            style={style.linkStyle}>
        <li className="nav-item">
          <a
            href="/projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        </Link>
        <Link to="/resume"
        style={style.linkStyle}
        >
        <li className="nav-item">
          <a
            href="/resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        </Link>
        <Link to="/contact"
        style={style.linkStyle}>
        <li className="nav-item">
          <a
            href="/contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        </Link>
      </ul>
    )
};

export default NavBar;