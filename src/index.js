import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

import { ConnectedRouter } from 'connected-react-router'

import './index.css';
import Routes from './Routes';
import configStore from './store'

import * as serviceWorker from './serviceWorker';
const history = createBrowserHistory()
const store = configStore(history)

ReactDOM.render((
    <Provider store={store}>
			<ConnectedRouter history={history}>
				<Routes dispatch={store.dispatch} />
			</ConnectedRouter>
		</Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
