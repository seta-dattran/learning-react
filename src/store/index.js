import composeReducers from './rootReducer'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {todoSaga} from './modules/Todo/index'

//imports for routing
import { connectRoutes } from 'redux-first-router'
import routesMap from '../routesMap'

const { reducer, middleware, enhancer } = connectRoutes(routesMap);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaiMiddleware = createSagaMiddleware();
const store = createStore(
    composeReducers({location: reducer}),
    composeEnhancer(enhancer, applyMiddleware(middleware, sagaiMiddleware))
)
sagaiMiddleware.run(todoSaga);

export default store;