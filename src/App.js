import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutPage from "./About/AboutPage";
import HomePage from "./Home Page/home";

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

        <Route exact path="/" component={HomePage} />
        <Route path="/about-page" component={AboutPage} />
      </div>
    </Router>
  );
};

export default App;
