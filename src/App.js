import data from './_DATA';
import React, {Component} from 'react';
import './App.css';

const Team = ({team, index, onDelete}) => (
	<tr>
		<td className='team'>{index + 1}. {team.name}</td>
		<td><button onClick={onDelete}>Delete</button></td>
	</tr>
);

export default class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			teams: data
		}
	}
	
	onDelete = name => this.setState(prevState => ({teams: prevState.teams.filter(team => team.name !== name)}));
	
	render() {
		const {teams} = this.state;
		const renderedTeams = teams.map((team, index) => {
			const {name} = team;
			return (
				<Team key={name} index={index} team={team} onDelete={() => this.onDelete(name)}/>
			)
		});
		return (
			<table className='wrapper'>
				<thead>
				<tr>
					<th>
						<h1>EPL Teams</h1>
					</th>
				</tr>
				</thead>
				<tbody className='teams'>
				{renderedTeams}
				</tbody>
			</table>
		)
	}
}