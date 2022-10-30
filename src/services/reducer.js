import type from 'services/actions';

const reducer = (state, action) => {
    switch (action.type) {
        case type.USER_SUCCESS: {
            return { ...state, user: action.payload };
        }
        default:
            return state;
    }
};

export default reducer;
