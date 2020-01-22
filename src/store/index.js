import rootReducer from './rootReducer'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {todoSaga} from './modules/Todo/index'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaiMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(sagaiMiddleware))
)
sagaiMiddleware.run(todoSaga);

export default store;