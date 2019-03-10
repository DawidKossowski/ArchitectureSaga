import React from 'react';
import renderer from 'react-test-renderer'
import UserList from '../UserList';
import { wrapInProvider } from '../../../testUtils';

describe('user sagas', () => {
    const props = {
        users: [
            { id: 1, first_name: 'D', last_name: 'K'}
        ],
    };
    it('should fetch users', () => {
        const user = renderer.create(
          wrapInProvider(<UserList />)
        ).toJSON();
        expect(user).toMatchSnapshot();
    });
});
