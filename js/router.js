import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import {
	NotesComponent,
	BoardComponent,

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
		this.render(
			<BoardComponent></BoardComponent>
			);
	}

});