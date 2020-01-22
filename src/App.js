import React from 'react';
import './App.css';
import Container from './screens/Container'
import Nav from './screens/Nav'

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
