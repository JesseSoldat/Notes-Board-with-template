import React from 'react';
import ReactDOM from 'react-dom';




export default React.createClass({
	getInitialState(){
		return (
			{editing: false}
			);
	},
	componentDidMount: function(){
		$(ReactDOM.findDOMNode(this)).draggable();

		// $( "#note" ).draggable();
		

	},
	edit(){ 
		console.log('edit');
		// $( "#note" ).draggable();

	},
	delete(){
		console.log('delete');
		$( "#test" ).html('test');

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