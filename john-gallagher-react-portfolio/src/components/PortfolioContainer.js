import React, { useState } from 'react';
import NavBar from './NavBar';
import About from './pages/About';
// import Contact from './pages/Contact';
import Projects from './pages/Projects';
// import Resume from './pages/Resume';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    // const renderPage = () => {
    //   if (currentPage === 'About') {
    //     return <About />;
    //   }
    //   if (currentPage === 'Project') {
    //     return <Projects />;
    //   }
    //   if (currentPage === 'Resume') {
    //     return <Resume />;
    //   }
    //   return <Contact />;
    // };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
    <Router>
      <div>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Routes>
            <Route path='/projects' element= {<Projects/>} />
            <Route path='/about' element= {<About/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
    );
  }