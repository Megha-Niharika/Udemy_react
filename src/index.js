import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


var app =(
    <div>
<App  name="Abhay" age="28"/>
<App  name="vivi" age="29"/>
</div>
);
ReactDOM.render(app, document.getElementById('app'));

//ReactDOM.render(, document.getElementById('root1'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
