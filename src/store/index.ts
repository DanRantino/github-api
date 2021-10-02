import { Action, createStore } from 'redux';

function changeThemes(state = false, action: Action) {
    switch (action.type) {
        case 'THEME_INITIAL':
            return !state as boolean;
        default:
            return state as boolean;
    }
}

const store = createStore(changeThemes);
export default store;
