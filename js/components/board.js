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
	nextId(){
		this.newId = this.newId || 0;
		return this.newId++;
	},
	addNote(text){
		console.log(text);
		var arr = this.state.notes;
		arr.push(
			{
				id: this.nextId(),
				note: text
			}
		);
		this.setState( {notes: arr} );
	},

	remove(i){
		let arr = this.state.notes;
		arr.splice(i,1);
		this.setState( {notes: arr});
	},
	update(newText, i){
		var arr = this.state.notes;
		arr[i].note = newText;
		this.setState( {notes: arr});
	},
	eachNote(note, i){
		return (
			<NotesComponent key={note.id}
			index={i}
			update={this.update}
			remove={this.remove}>
			{note.note}
			</NotesComponent>
			);
	},
	
	render(){
		return (
			<div id="board">
				{this.state.notes.map(this.eachNote)}
				<button className="
				customBtn
				button success radius small"
				id="addNote"
				onClick={this.addNote.bind(null, 'New Note')}>Add
				</button>
			</div>
			)
	}
});