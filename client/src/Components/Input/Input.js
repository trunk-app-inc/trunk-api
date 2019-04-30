import React from 'react';
import './Input.css'
const Input = (props) => <input type={props.type} className={`mainInput ${props.className}`} onChange={props.onChange} name={props.name}/>

export default Input;