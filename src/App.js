import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Form from './Components/Header/Form';

class App extends Component {
  state = {
    user: "",
    repos: [],
    error: "",
    loading: false,
  };

  changeUser = user => {
    this.setState({ user });
  }

 

  render(){
   const { user, repos, error, loading } = this.state;
    return (
    <div className="App">
      <Header />
      <Form 
        changeUser={this.changeUser}
        user={user}
        error={error}
        loading={loading}
        buttonAction={() => console.log("buscar aqui!")}
      />

    </div>
    );
  }
  
}

export default App;
