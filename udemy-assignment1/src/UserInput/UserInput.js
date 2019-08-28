import React from 'react';

const userInput = props => (
	<input type='text' onChange={props.changed} value={props.userName}></input>
);

export default userInput;
