import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const initialReducerState = {
    users: [],
};

export function wrapInProvider(elementToWrap) {
    const mockStore = configureStore();
    const store = mockStore(initialReducerState);

    return (
      <Provider store={store}>
          {elementToWrap}
      </Provider>
    );
}
