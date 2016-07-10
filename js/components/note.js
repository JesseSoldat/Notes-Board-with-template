import React from 'react';
import ReactDOM from 'react-dom';


export default React.createClass({
	getInitialState(){
		return (
			{editing: false}
			);
	},
	componentWillMount: function(){
		this.style = {

		}
	},
	componentDidMount: function(){
		$(ReactDOM.findDOMNode(this)).draggable();

		// $( "#note" ).draggable();
		

	},
	edit(){ 
		this.setState( {editing: true});


	},
	delete(){
		console.log('delete');
		$( "#test" ).html('test');

	},
	save(){
		this.setState( {editing: false});
	},
	renderDisplay(){
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
		
	},

	renderForm(){
		return (
			<div id="note">
				<textarea className="form-control"
				defaultValue={this.props.children}/>
				<span id="noteBtnWrapper">
					<button className="noteBtn button success tiny radius"
					onClick={this.save}>
						<i className="fa fa-save"></i>
					</button>
				</span>
			</div>

				);
	},

	render(){
		if(this.state.editing) {
			return this.renderForm();
		}	else {
			return this.renderDisplay();
		}
	}
});