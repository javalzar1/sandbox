import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import get from '../api/get.jsx';
import data from '../config/dummyData.js';

import LogIn from "./LogIn.jsx";
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      tableView: true,
      games: data,    // -> [] empty when NBA Stats API is mounted
      searchType: 'player',
      searchValue: ''
    }
  }

  // preload table with game data on home page
  // componentDidMount() {
  //   get(this.props.API_KEY, (result) => {
  //     this.setState({
  //       games: result.data
  //     });
  //   })
  // }

  searchType(e) {
    this.setState({
      searchType: e.target.value
    });
  }

  handleSearchValue(e) {
    this.setState({
      searchValue: e.target.value
    })
  }

  searchSubmit() {
    let type = this.state.searchType;
    let value = this.state.searchValue;

  }

  render () {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" >NBA Stats</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
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
                searchType={this.searchType.bind(this)}
                searchValue={this.state.searchValue}
                handleSearchValue={this.handleSearchValue.bind(this)}
                searchSubmit={this.searchSubmit.bind(this)}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
