import React from 'react';
import Players from './Players.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch("https://free-nba.p.rapidapi.com/players", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": this.props.API_KEY,
        "x-rapidapi-host": "free-nba.p.rapidapi.com"
      }
    })
    .then(response => {
      response.json()
      .then((data) => {
        console.log(data)
        this.setState({ players: data.data})
      })
    })
    .catch(err => {
      console.error(err);
    });
  }


  render() {

    return(
      <Players players={this.state.players} />
    );
  }
}
export default App;

