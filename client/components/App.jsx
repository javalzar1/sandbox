import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  // search() {
  //   let options = {
  //     key: this.props.API_KEY,
  //     query: 'kobe'
  //   }

  //   let stats = searchNBA(options, (data) => {
  //     return data;
  //   });
  //   this.setState({
  //     data: this.props.stats
  //   })
  // };



  render() {
    return(
      <div>
        <h1>NBA APP</h1>
        <h2>test</h2>

      </div>
    )
  }
}
export default App;

