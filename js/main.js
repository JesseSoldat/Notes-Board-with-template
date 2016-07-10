import React from 'react';
import ReactDom from 'react-dom';
import Router from './router';

let app = document.querySelector('#root');

new Router(app).start();
