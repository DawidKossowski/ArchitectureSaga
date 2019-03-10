import { FETCH_USERS, fetchUsers, SET_USERS, setUsers } from '../userActions';
import { fakeUsers } from '../__mocks__/mockData';

describe('user actions', () => {
   it('should create an action to fetch users', () => {
       const expectedAction = {
           type: FETCH_USERS,
       };
       expect(fetchUsers()).toEqual(expectedAction);
   });

    it('should create an action to set users', () => {
        const expectedAction = {
            type: SET_USERS,
            users: fakeUsers,
        };
        expect(setUsers(fakeUsers)).toEqual(expectedAction);
    });
});
