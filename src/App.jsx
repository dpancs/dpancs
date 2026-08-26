import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
<Router>
<div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <Link to="/resume" className="App-nav-link">Resume</Link>
          <Link to="/contact" className="App-nav-link">Contact</Link>
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
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
