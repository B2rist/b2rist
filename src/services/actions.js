const createAction = (type) => (payload) => ({ type, payload });

const type = {
  USER_SUCCESS: 'USER_SUCCESS',
  ROUTE_LIST_REQUEST: 'ROUTE_LIST_REQUEST',
  ROUTE_LIST_SUCCESS: 'ROUTE_LIST_SUCCESS',
  ROUTE_LIST_FAILURE: 'ROUTE_LIST_FAILURE',
};

export default type;

export const userSuccess = createAction(type.USER_SUCCESS);
export const routeListRequest = createAction(type.ROUTE_LIST_REQUEST);
export const routeListSuccess = createAction(type.ROUTE_LIST_SUCCESS);
export const routeListFailure = createAction(type.ROUTE_LIST_FAILURE);
