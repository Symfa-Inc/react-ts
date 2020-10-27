import { combineReducers } from '@wellyes/redux-kit';
import { authReducer } from './auth/auth.reducers';

export const rootReducer = combineReducers({
  auth: authReducer,
});

export const RootReducer = typeof rootReducer;
