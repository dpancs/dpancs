import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
function App() {
  return (
<Router>
<div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <Link to="/about" className="App-nav-link">About</Link>
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
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
