import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'services/userSlice';
import routeReducer from 'services/routeSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    route: routeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['user/userChanged']
      }
    })
});

export default store;
