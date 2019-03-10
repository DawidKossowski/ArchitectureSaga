import {put, takeEvery} from 'redux-saga/effects';
import {FETCH_USERS, setUsers} from './userActions';
import {http} from '../shared/services/Http';

export function* fetchUsers() {
    try {
        const response = yield http.get('users');
        const {data} = response;
        yield put(setUsers(data));
    } catch(e) {
        // handle error
        console.log(e);
    }
}

export const userSagas = [
    takeEvery(FETCH_USERS, fetchUsers),
];
