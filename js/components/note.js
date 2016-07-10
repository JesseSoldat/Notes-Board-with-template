import React from 'react';

export default React.createClass({
	getInitialState(){
		return (
			{editing: false}
			);
	},
	render(){
		return (
			<div id="note">
				<p>{this.props.children}</p>
				<span id="noteBtnWrapper">
					<button className="noteBtn button tiny radius">
						<i className="btnIcon fa fa-pencil">
						</i>
					</button>
					<button className="noteBtn button tiny radius">
						<i className="btnIcon fa fa-trash">
						</i>
					</button>
				</span>
			</div>
			);
		
	}
});