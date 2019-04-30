import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import usersApi from '../../api/user'
import './Login.css'
import icon from '../../assets/eleIconSmall.png'
import Input from '../../Components/Input/Input';
const axios = require('axios')
class Home extends Component {
 state = {
	 homeMD: null,
	 email: '',
	 password: ''
 }

	componentDidMount() {
	
	}
	login = (e) => {
		e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    usersApi.login(user).then(user => {
      console.log(user.data.token)
      localStorage.setItem('token', user.data.token)
     if(user.data.token){
       window.location.reload();
     }
    })
	}
	change= (event)=> {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
	render () {
		return (
			<div className="login">
				<div className="card">
				<div>
					<img src={icon} alt=""/>
					<h1>Trunk Documentation</h1>
				</div>
					<form className="form">
						<Input type="email" name='email' onChange={this.change}/>
						<Input type="password" name='password' onChange={this.change}/>
						<button onClick={this.login}>Login</button>
					</form>	
				</div>
			</div>
		)
	}
}

export default Home;