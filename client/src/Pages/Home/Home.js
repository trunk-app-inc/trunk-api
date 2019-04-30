import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import Nav from '../../Components/Nav/Nav'
import usersApi from '../../api/user'
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
				<div className="wrapper">
					<button onClick={this.createToken}>
						Get Token
					</button>
				</div>
			</div>
		)
	}
}

export default Home;