import logo from './logo.svg';
import './App.css';
import Contact from './Contact/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          new develop created
          Now child rk branch created
          New branch rk 2 created
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <div>
      <Router>
        <Routes>
            <Route path="/contact" component={Contact} />
        </Routes>
            
      </Router>
        </div>
    </div>
  );
}

export default App;
