import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getTracks() {
    console.log('in function* getTracks');
    try {
        const response = yield axios ({
            method: 'GET',
            url: `/api/tracks`
        });
        yield put({
            type: 'SET_TRACKS',
            payload: response.data
        });
    } catch(err) {
        console.log('error fetching your movies', err);
    }
}

function* getTracksSaga() {
    yield takeLatest('GET_TRACKS', getTracks);
}

export default getTracksSaga;