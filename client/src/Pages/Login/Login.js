import React, { Component } from 'react';
import usersApi from '../../api/user'
import './Login.css'
import icon from '../../assets/eleIconSmall.png'
import Input from '../../Components/Input/Input';
import H1 from '../../Components/H1/H1'
import PBtn from '../../Components/Button/PBtn';
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
					<H1>Trunk Documentation</H1>
				</div>
					<form className="form">
						<Input type="email" name='email' onChange={this.change}/>
						<Input type="password" name='password' onChange={this.change}/>
						<PBtn onClick={this.login}>Login</PBtn>
					</form>	
				</div>
			</div>
		)
	}
}

export default Home;