import {all} from 'redux-saga/effects';
import {userSagas} from '../user/userSagas';

export default function* rootSaga() {
    yield all([
      ...userSagas
    ])
}
