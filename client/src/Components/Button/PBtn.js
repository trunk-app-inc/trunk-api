import React from 'react';
import './PBtn.css'
const PBtn = (props) => <button className="primary-button" onClick={props.onClick}>{props.children}</button>

export default PBtn;