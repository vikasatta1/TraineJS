import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './redux/state';
import {lala} from "./lessons/lesson2/lesson2";
import {lele} from "./lessons/lesson6/lesson6";


lele()
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
