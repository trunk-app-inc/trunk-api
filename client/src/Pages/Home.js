import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import homeMD from '../Markdown/home.md'
class Home extends Component {
 state = {
	 homeMD: null
 }

	componentDidMount() {
		fetch(homeMD).then((response) => response.text()).then((text) => {
      this.setState({ homeMD: text })
    })
	}

	render () {
		return (
			<div className="home">
			<ReactMarkdown source={this.state.homeMD} />	
			</div>
		)
	}
}

export default Home;