import React, {Component} from 'react';

export default class User extends Component {
    render() {
        const {data} = this.props;
        return (
          <li>
              <span>{data['first_name']} </span>
              <span>{data['last_name']}</span>
          </li>
        )
    }
}
