import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import {
	NotesComponent,

} from './components';

export default Backbone.Router.extend({

	routes: {
		"" : 'showNotes'
	},

	initialize(app) {
		this.el = app;

	},

	start() {
		Backbone.history.start();
		return this;
	},

	render(component) {
		ReactDom.render(component, this.el);
	},

	showNotes(){
		console.log('showNotes');
		this.render(<NotesComponent />)
	}

});