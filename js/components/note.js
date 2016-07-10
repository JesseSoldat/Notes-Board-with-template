import React from 'react';

export default React.createClass({
	getInitialState(){
		return (
			{editing: false}
			);
	},
	edit(){
		console.log('edit');
	},
	delete(){
		console.log('delete');
	},
	render(){
		return (
			<div id="note">
				<p>{this.props.children}</p>
				<span id="noteBtnWrapper">
					<button 
					onClick={this.edit}
					className="noteBtn button tiny radius">
						<i className="btnIcon fa fa-pencil">
						</i>
					</button>
					<button 
					onClick={this.delete}
					className="noteBtn button  alert tiny radius">
						<i className="btnIcon fa fa-trash">
						</i>
					</button>
				</span>
			</div>
			);
		
	}
});