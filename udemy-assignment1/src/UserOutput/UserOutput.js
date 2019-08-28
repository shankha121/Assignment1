import React from 'react';
import './UserOutput.css';

const userOutput = props => {
	return (
		<div className='UserOutput'>
			<p>First React App! Print User Name = '{props.userName}' </p>
			<p>Please login with your password.</p>
		</div>
	);
};

export default userOutput;
