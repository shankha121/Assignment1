import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
	state = {
		UserOutput: [
			{ userName: 'smand004' },
			{ userName: 'amukh005' },
			{ userName: 'sghos005' },
			{ userName: 'vpal01' },
			{ userName: 'bhouly01' }
		]
	};

	userNameHandler = () => {
		this.setState({
			UserOutput: [
				{ userName: 'Sayantan Mandal' },
				{ userName: 'Anwesha Mukherjee' },
				{ userName: 'Shankha Subhra Ghosh' },
				{ userName: 'V Pal' },
				{ userName: 'Bikram Houly' }
			]
		});
	};

	userNameChangeHandler = event => {
		this.setState({
			UserOutput: [
				{ userName: event.target.value }
				{ userName: event.target.value }
				{ userName: event.target.value }
				{ userName: event.target.value }
				{ userName: event.target.value }
			]
		});
	};

	render() {
		return (
			<div className='App'>
				<p onClick={this.userNameHandler}>Working</p>
				<UserOutput userName={this.state.UserOutput[0].userName} />
				<p>
					If you want to change your username Type Here{' '}
					<UserInput
						changed={this.userNameChangeHandler}
						userName={this.state.UserOutput[0].userName}
					/>
				</p>
				<UserOutput userName={this.state.UserOutput[1].userName} />
				<p>
					If you want to change your username Type Here{' '}
					<UserInput
						changed={this.userNameChangeHandler.event1}
						userName={this.state.UserOutput[1].userName}
					/>
				</p>
				<UserOutput userName={this.state.UserOutput[2].userName} />
				<p>
					If you want to change your username Type Here{' '}
					<UserInput
						changed={this.userNameChangeHandler}
						userName={this.state.UserOutput[2].userName}
					/>
				</p>
				<UserOutput userName={this.state.UserOutput[3].userName} />
				<p>
					If you want to change your username Type Here{' '}
					<UserInput
						changed={this.userNameChangeHandler}
						userName={this.state.UserOutput[3].userName}
					/>
				</p>
				<UserOutput userName={this.state.UserOutput[4].userName} />
				<p>
					If you want to change your username Type Here{' '}
					<UserInput
						changed={this.userNameChangeHandler}
						userName={this.state.UserOutput[4].userName}
					/>
				</p>
			</div>
		);
	}
}

export default App;
