import React from 'react';

import {
	NotesComponent,

} from './';


export default React.createClass({
	getInitialState(){
		return (
			{notes: []}
			);
	},
	addNote(){
		console.log('addNote');
	},
	render(){
		return (
			<div id="board">
				<NotesComponent>Note</NotesComponent>
				<button className="
				customBtn
				button success radius small"
				id="addNote"
				onClick={this.addNote()}>Add
				</button>
			</div>
			)
	}
});