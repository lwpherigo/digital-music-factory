import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getArtists() {
    console.log('in function* getArtists');
    try {
        const response = yield axios ({
            method: 'GET',
            url: `/api/artists`
        });
        yield put({
            type: 'SET_ARTISTS',
            payload: response.data
        });
    } catch(err) {
        console.log('error fetching your artists', err);
    }
}

function* getArtistsSaga() {
    yield takeLatest('GET_ARTISTS', getArtists);
}

export default getArtistsSaga;