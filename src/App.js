import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import UserList from "./user/containers/UserList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <UserList />
      </Provider>
    );
  }
}

export default App;
