import React from 'react';
import './App.css';
import Container from './Container'
import Nav from './Nav'

class App extends React.Component {
  //state needed for dark mode switch
  state = {
    mode: "",
    modeName: "Light"
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <Container />
      </div>
    );
  }

}

export default App;
