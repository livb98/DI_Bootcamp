import React from 'react';
import Form from './component/Form';



class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastname: '',
      age: '',
      gender: '',
      destination: '',
      diet: ''
    };
  }

  handleChange = event => {
    this.setState({
        [event.target.id]: event.target.value
    });
}
handleSubmit = event => {
  event.preventDefault();
  const formData = {
      name: event.target.name ? event.target.name.value : '',
      lastname: event.target.lastname ? event.target.lastname.value : '',
      age: event.target.age ? event.target.age.value : '',
      gender: event.target.gender ? event.target.gender.value : '',
      destination: event.target.destination ? event.target.destination.value : '',
      diet: event.target.diet ? event.target.diet.value : ''
  };
  console.log('Form submitted:', formData);
}


  render() {
  return (
  <div className="box">
    <Form
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      formData={this.state}
    />

  </div>
  )
  }


}

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <Info/>
      </header>
      <form>
        <h1>entered info:</h1>
      </form>
    </div>
  )
  }

export default App;

