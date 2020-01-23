import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import getTracksSaga from './tracks.saga';
import getResultsSaga from './results.saga';
import getArtistsSaga from './artists.saga';
import selectedArtist from './selected-artist.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    getTracksSaga(),
    getResultsSaga(),
    getArtistsSaga(),
    selectedArtist(),
  ]);
}