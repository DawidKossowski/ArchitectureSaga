import React from 'react';
import renderer from 'react-test-renderer'
import User from '../User';

describe('User', () => {
    const props = {
        data: {
            first_name: 'D',
            last_name: 'K',
        }
    };
    it('should redner correctly', () => {
        const user = renderer.create(<User {...props} />).toJSON();
        expect(user).toMatchSnapshot();
    });
});
