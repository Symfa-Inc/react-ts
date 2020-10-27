import { Action, reducer } from '@wellyes/redux-kit';
import { AuthState } from './types';
import {
  login,
} from './auth.actions';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errors: '',
  loading: false,
};

export const authReducer = (state: AuthState = initialState, action: Action): AuthState => {
  const states = {
    ...reducer(login, state, action, { dataMask: 'user' }),
  };
  return states[action.type] || state;
};
