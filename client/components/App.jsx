import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LogIn from "./LogIn.jsx";
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      tableView: true,
      games: []
    }
  }

  // preload table with game data on home page
  componentDidMount() {
    fetch("https://free-nba.p.rapidapi.com/games?per_page=25", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.props.API_KEY,
        "x-rapidapi-host": "free-nba.p.rapidapi.com"
      }
    })
    .then(response => {
      response.json()
      .then((data) => {
        this.setState({ games: data.data})
      })
    })
    .catch(err => {
      console.error(err);
    });
  }

  render () {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" >NBA Stats</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <Link to="/">Home</Link>
                </li>
                <br/>
                <li className="nav-item">
                  <Link to="/SignUp">Sign Up</Link>
                </li>
                <br/>
                <li className="nav-item">
                  <Link to="/LogIn">Log In</Link>
               </li>
              </ul>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/LogIn">
              <LogIn />
            </Route>
            <Route path="/">
              <Home
                games={this.state.games}
                tableView={this.state.tableView}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
