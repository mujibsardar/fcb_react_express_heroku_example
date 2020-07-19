import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(){
   super()
   this.state = {
     name: "",
     message: ""
  }
 }

 componentDidMount = () => {
    this.loadPeople()
  }

  newName = (event) => {
    this.setState({
      name: event.target.value
    })
}

  newMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

 createPerson = (event) => {
    event.preventDefault();
    axios.post(
      '/api',
      {
        person: {
          name: this.state.name,
          message: this.state.message
        }
      }
      ).then(
      (response) => {
        console.log(response)
      }
  )
}

loadPeople = () => {
axios.get('/api').then(
  (response) => {
    console.log(response.people)
  }
)
}

render = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <form onSubmit={this.createPerson}>
        <input onChange={this.newName} type="text" placeholder="Name"/>
        <input onChange={this.newMessage} type="text" placeholder="Message"/>
          <input type="submit" value="Submit"/>
      </form>


    </div>
  );
  }
}

export default App;
