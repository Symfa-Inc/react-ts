import { createSelector } from 'reselect';
import { RootReducer } from '@store/types';
import { AuthState } from './types';

export const getAuthState = (state: RootReducer): AuthState => state.auth;

export const isAuthenticatedData = createSelector(
  getAuthState,
  ({ isAuthenticated, loading }) => ({ isAuthenticated, loading }),
);
