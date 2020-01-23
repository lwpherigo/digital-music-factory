import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* selectedArtist(action) {
    console.log('in function* selectedArtist');
    console.log('SELECT ARTIST SAGA', action.payload)
    try {
        const response = yield axios.get(`/api/artists/selected/${action.payload.id}`);
        console.log(response);
        yield put({
            type: 'SET_ARTIST',
            payload: response.data[0]
        })
    } catch(err) {
        console.log('error fetching your ARTIST', err);
    }
}

function* selectedArtistSaga() {
    yield takeLatest('GET_ARTIST_BY_ID', selectedArtist);
}

export default selectedArtistSaga;