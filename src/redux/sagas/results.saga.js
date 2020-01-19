import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getResults(action) {
    console.log('in function* getResults');
    try {
        const response = yield axios ({
            method: 'GET',
            url: `/api/tracks/search/${action.payload}`
        });
        yield put({
            type: 'SET_RESULTS',
            payload: response.data
        });
    } catch(err) {
        console.log('error fetching your movies', err);
    }
}

function* getResultsSaga() {
    yield takeLatest('GET_RESULTS', getResults);
}

export default getResultsSaga;