import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {fetchData,fetchDataSuccess, fetchDataFail, ADD_TODO, addTodoWithId } from './action'
import {uuidv4} from './utils'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* workerSaga() {        
    try {
        const todos = yield call(fetchPosts);                           
        console.log(todos);        
        yield put(fetchDataSuccess(todos));    
                                   
    } catch (e) {
        console.log(e);        
       yield put(fetchDataFail(e.message));
    }
}

function fetchPosts() { 
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    
}

function* createTodo(action) {
    const id = uuidv4();            
    yield put(addTodoWithId(action.payload.text, action.payload.username, id))      
}

export function* todoSaga() {
    yield takeEvery('FETCH_DATA_BEGIN', workerSaga);
    yield takeEvery(ADD_TODO, createTodo);
}