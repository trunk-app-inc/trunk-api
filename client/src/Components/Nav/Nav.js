import React from 'react';
import './Nav.css'
import PBtn from '../Button/PBtn'
const Nav = (props) => (
	<div className="side-nav">
		<PBtn id="logout" onClick={props.logout}>Logout</PBtn>
	</div>
)

export default Nav;