import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>MANCALA CALCULATOR</h2>
    </div>
  )
};

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path='/' component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
