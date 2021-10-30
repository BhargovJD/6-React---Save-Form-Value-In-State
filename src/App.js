import Person from './components/Person'
import Form from './components/Form';

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: [
        {
          id: 1,
          name: "Bhargov",
          age: "25"
        },

        {
          id: 2,
          name: "Das",
          age: "25"
        },
        {
          id: 3,
          name: "ABC",
          age: "25"
        }
      ],

      isShow:true,
    }

    this.toggleHandler = this.toggleHandler.bind(this)

  }


  toggleHandler(){
    // alert("Alert")

    this.setState({isShow:!this.state.isShow});
  }

  removeHandler = (personIndex)=>{
    // alert(personIndex)
    const personCopy = this.state.person;
    personCopy.splice(personIndex,1);
    this.setState({person:personCopy})

  }

  render() {

    let persons;
    persons = this.state.person.map((p,index) => {
      return <Person key={index} id={p.id} name={p.name} age={p.age} remove={()=>this.removeHandler(index)} />
    });

    return <div>
      <h3>Form</h3>
      <Form/>

      <h3>List Loop</h3>
      <button onClick={this.toggleHandler}>Toggle</button>

      {
        this.state.isShow===true?persons:""

      }
    </div>

  }
}

export default App

