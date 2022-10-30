import React, { createContext, useMemo, useReducer } from 'react';
import reducer from 'services/reducer';
import * as PropTypes from 'prop-types';

const initialState = {
    user: null,
};

const init = (state) => state;

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const stateProvidedValue = useMemo(() => [state, dispatch], [state, dispatch]);
    return <Context.Provider value={stateProvidedValue}>{children}</Context.Provider>;
};

export const Context = createContext(initialState);

export default Store;

Store.propTypes = {
    children: PropTypes.any.isRequired,
};
