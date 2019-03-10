import userReducer from '../userReducer';
import { FETCH_USERS, SET_USERS } from '../userActions';
import { fakeUsers } from '../__mocks__/mockData';

describe('user actions', () => {
   it('should return initial state', () => {
        expect(userReducer(undefined, { type: FETCH_USERS })).toEqual({
            page: 0,
            per_page: 0,
            total: 0,
            total_pages: 0,
            data: [],
        })
   });

    it('should handle SET_USERS', () => {
        expect(
          userReducer(undefined, { type: SET_USERS, users: fakeUsers })
        ).toEqual(fakeUsers);
    });
});
