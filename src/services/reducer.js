import type from 'services/actions';

const reducer = (state, action) => {
    switch (action.type) {
        case type.ROUTE_LIST_REQUEST: {
            return { ...state, routeList: { ...state.routeList, loading: true } };
        }
        case type.ROUTE_LIST_SUCCESS: {
            return { ...state, routeList: { data: action.payload, loading: false } };
        }
        case type.ROUTE_LIST_FAILURE: {
            return { ...state, routeList: { ...state.routeList, loading: false } };
        }
        default:
            return state;
    }
};

export default reducer;
