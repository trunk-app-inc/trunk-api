import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav'
import usersApi from '../../api/user'
import Wrapper from '../../Components/Wrapper/Wrapper';
const axios = require('axios')
class Home extends Component {
 state = {
	 homeMD: null,
 }

	componentDidMount() {
		
	}

	createToken = () => {
		axios.post('http://localhost:3001/api/genToken').then(token => {
			console.log(token)
		})
	}

	
	render () {
		return (
			<div className="home">
				<Nav logout={this.props.logout}/>
				<Wrapper>
					hello
				</Wrapper>
			</div>
		)
	}
}

export default Home;