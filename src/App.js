import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutPage from './About/AboutPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-page">My Page</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/about-page" component={AboutPage} />
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
    </div>
  );
};

export default App;



