import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Utilities from './pages/Utilities';
import Blog from './pages/Blog';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <header className="App-header">
          <nav className="App-nav" aria-label="Main navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/utilities">Utilities</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
