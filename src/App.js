import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Rishabh', age: 20 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>I am a react app.</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.name.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.name.persons[1].age}>My hobbies are cricket</Person>
        {/* Hard code
        <Person name="Rishabh" age="20" />
        <Person name="Aman" age="21">My hobbies are cricket</Person> */}
      </div>
    );
  }
}

export default App;
