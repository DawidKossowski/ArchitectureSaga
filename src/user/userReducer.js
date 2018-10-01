import {SET_USERS} from "./userActions";

export function userReducer(state = [], action) {
    switch (action.type) {
        case SET_USERS:
            return action.users;
        default:
            return state;
    }
}
