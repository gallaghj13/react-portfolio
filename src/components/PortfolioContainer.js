import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
    <Router>
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <Routes>
            <Route path='/projects' element= {<Projects/>} />
            <Route path='/about' element= {<About/>} />
            <Route path='/contact' element= {<Contact/>} />
            <Route path='/resume' element= {<Resume/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    );
  }