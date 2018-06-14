import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from "./App";
import {trials as TrialsReducer} from './reducers/TrialsReducer'

const store = createStore(TrialsReducer);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>,
    document.getElementById('root')
);