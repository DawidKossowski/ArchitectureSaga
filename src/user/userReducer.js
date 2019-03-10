import {SET_USERS} from "./userActions";

const userInitialState = {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data: [],
};

export default (state = userInitialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return action.users;
        default:
            return state;
    }
}
