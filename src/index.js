// Here index.js works as the entry point of the application. It uses ReactDOM.render to render App and gets the app started. 
//It also engages the registerServiceWorker which helps the app to run properly even with a poor internet connection
// The index.js files provide us neat entry points to the files so they are easy to consume from elsewhere.
//Lastly, it renders the app to the DOM in the root div

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
