import React from 'react';
import renderer from 'react-test-renderer'
import User from '../User';

describe('user sagas', () => {
    const props = {
        data: {
            first_name: 'D',
            last_name: 'K',
        }
    };
    it('should fetch users', () => {
        const user = renderer.create(<User {...props} />).toJSON();
        expect(user).toMatchSnapshot();
    });
});
