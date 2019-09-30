import { routerMiddleware, connectRouter } from 'connected-react-router'
import { applyMiddleware, compose , createStore, combineReducers } from 'redux'


import reducer from './reducer'
const composeEnhancers
    = process.env.NODE_ENV === 'development' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line
    	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    		// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    	})
    	: compose


export default history => createStore(
    combineReducers({
        router: connectRouter(history),
        index: reducer
    }),
    [ 'Use Redux' ],
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            // thunkMiddleware,
            // loadingMiddleware,
            // promiseMiddleware,
            // errorMiddleware,
        ),
    ),
)