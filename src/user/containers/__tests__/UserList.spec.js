import React from 'react';
import renderer from 'react-test-renderer'
import UserList from '../UserList';
import { wrapInProvider } from '../../../testUtils';

describe('UserList', () => {
    it('should render correctly', () => {
        const user = renderer.create(
          wrapInProvider(<UserList />)
        ).toJSON();
        expect(user).toMatchSnapshot();
    });
});
