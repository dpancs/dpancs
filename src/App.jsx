import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Utilities from './pages/Utilities';
import Blog from './pages/Blog';

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
        <nav className="App-nav">
          <Link to="/resume" className="App-nav-link">Resume</Link>
          <Link to="/contact" className="App-nav-link">Contact</Link>
          <Link to="/utilities" className="App-nav-link">Utilities</Link>
          <Link to="/blog" className="App-nav-link">Blog</Link>
          <a
          className="App-nav-link"
          href="https://www.linkedin.com/in/deeppancholi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/utilities" element={<Utilities />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
