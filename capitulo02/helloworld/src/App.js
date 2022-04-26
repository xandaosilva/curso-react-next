import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component{
  state = {
    message: "Edit <code>src/App.js</code> and save to reload.",
    counter: 0
  };

  handlePClick = () => this.setState({ message: "Edite <code>src/App.js</code> e salve para recarregar ." });

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({counter: counter + 1})
  }

  render(){
    const {message, counter} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>{message} {counter}</p>
          <a onClick={this.handleAClick} className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        </header>
      </div>
    );
  }
}

export default App;
