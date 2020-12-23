import React from 'react';
import Games from './Games.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

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
        console.log(data.data)
        this.setState({ games: data.data})
      })
    })
    .catch(err => {
      console.error(err);
    });
  }


  render() {
    return(
      <Games games={this.state.games} />
    );
  }
}
export default App;

