import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {fetchData,fetchDataSuccess, fetchDataFail } from './action'

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
    return fetch('https://jsonplaceholder.typicode.comm')
    .then(res => res.json())
    
}
export function* todoSaga() {
    yield takeEvery('FETCH_DATA_BEGIN', workerSaga);
}