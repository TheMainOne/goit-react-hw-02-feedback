import React, { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


    render() {
        const { good, neutral, bad } = this.state;
      return <>
          <h1>Please leave feedback</h1>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
          <h2>Statistics</h2>
          <ul>
              <li>Good:</li>
              <li>Neutral:</li>
              <li>Bad:</li>
          </ul>
      </>
  }
}

export default App;