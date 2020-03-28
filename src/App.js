import React from 'react';
import './App.css';
import axios from 'axios';
import UserForm from './components/UserForm';
import ProviderForm from './components/ProviderForm';
import EmailForm from './components/EmailForm';
import LandingPage from './components/LandingPage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apiResponse: ""
    }
  }

  componentDidMount () {
    axios.get('http://localhost:8080/testServer/')
    .then((response) => {
      this.setState({
        apiResponse: response.data
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <UserForm />
        <p> {this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
