import React from 'react';
import './Nav.css'
const Nav = (props) => (
	<div className="side-nav">
		<button onClick={props.logout}>Logout</button>
	</div>
)

export default Nav;