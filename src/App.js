import React from 'react';
import './App.css';
import Container from './screens/Container'
import Nav from './screens/Nav'

class App extends React.Component {
  //state needed for dark mode switch
  constructor() {
    super()
    this.state = {
      mode: "",
      modeName: ""
    }
  }

  handleClick = () => {
    if(this.state.modeName === "") {
      this.setState({ modeName: "dark" })
    } else if(this.state.modeName === "dark") {
      this.setState({ modeName: "" })
    }
  }
  

  render() {
    return (
      <div className={`container ${this.state.modeName}`}>
        <button className='darkmode-button' onClick={() => this.handleClick()}>Dark Mode</button>
        <Nav />
        <Container />
      </div>
    );
  }

}

export default App;
