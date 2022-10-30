const createAction = (type) => (payload) => ({ type, payload });

const type = {
  USER_SUCCESS: 'USER_SUCCESS',
};

export default type;

export const userSuccess = createAction(type.USER_SUCCESS);
