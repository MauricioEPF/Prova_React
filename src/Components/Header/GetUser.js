import React from 'react'
import axios from 'axios'
import './App.css';
class GetUser extends React.Component {
  state = {
    username: '',
    github: []
  }

onChange = (e)  => {
  this.setState( {username: e.target.value} )
   
    }

  pesquisar = async ()  => {
    const response = await axios.get(
      `https://api.github.com/users/${this.state.username}`)    
    this.setState({

      github: response.data

    })       
  }

  render() {
    
   return(
    <center>
    <div className="">
    <h1>GitHub</h1>
        <input onChange={this.onChange} type='text' placeholder="nome do usuario" className="userInput" />
        <button className="searchButton" onClick={this.pesquisar}>Pesquisar </button>
        { this.state.github.length !== undefined ? 
          <h1>Loading..</h1>
          :
        <div key={this.state.github.login} className="repoItemContainer" >
          <img    className="avatar"
            src={this.state.github.avatar_url}
              alt={this.state.github.name}
          />
            <h3>{this.state.github.name}</h3>
          <h3 className="repoItemContainer">{this.state.github.public_repos} Repositórios</h3>
            <h4 className="repoItemContainer">Login: {this.state.github.login}</h4>
          <h4 className="repoItemContainer"><a href={this.state.github.repos_url}>Ver Repositórios</a></h4>
            <hr/>
     </div>
      
        }
        
      </div></center>
    )
  }
}

export default GetUser