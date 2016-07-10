import React from 'react';
import ReactDOM from 'react-dom';


export default React.createClass({
	getInitialState(){
		return (
			{editing: false}
			);
	},
	randomBetween(min, max){
		return (min + Math.ceil(Math.random()* max));
	},
	componentWillMount(){
		this.style = {
			right: this.randomBetween(0, window.innerWidth - 150) + 'px',
			top: this.randomBetween(0, window.innerHeight - 150) + 'px',
			transform: 'rotate(' + this.randomBetween(-15, 15) + 'deg'
		}
	},
	componentDidMount(){
		$(ReactDOM.findDOMNode(this)).draggable();

		// $( "#note" ).draggable();
		

	},
	edit(){ 
		this.setState( {editing: true});

	},
	delete(){
		this.props.remove();
		
	},
	save(){
		let newText = ReactDOM.findDOMNode(this.refs.newText);
		this.props.update(newText.value, this.props.index);
		
		this.setState( {editing: false});
	},
	renderDisplay(){
		return (
			<div id="note" style={this.style}>
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
			<div id="note" style={this.style}>
				<textarea className="form-control"
				defaultValue={this.props.children} ref="newText"/>
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