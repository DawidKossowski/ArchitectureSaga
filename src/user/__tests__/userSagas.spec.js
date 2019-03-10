import { testSaga } from 'redux-saga-test-plan';
import { fetchUsers } from '../userSagas';
import { setUsers } from '../userActions';
import { fakeUsers } from '../__mocks__/mockData';
import { http } from '../../shared/services/Http';

describe('user sagas', () => {
    it('should fetch users', () => {
        testSaga(fetchUsers)
          .next(http.get)
          .next(fakeUsers)
          .put(setUsers(fakeUsers.data));
    });
});
