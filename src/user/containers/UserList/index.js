import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../../userActions';
import User from "../../components/User";

class UserList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const {users} = this.props;
        return (
          <ul>
              {users.map(user => (
                <User data={user} key={user.id}/>
              ))}
          </ul>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
});

const actions = {
    fetchUsers
};

export default connect(mapStateToProps, actions)(UserList);
