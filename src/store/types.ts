import { AuthState } from '@store/auth/types';
import { store } from '@store/index';

export type AppDispatch = typeof store.dispatch;

export type AsyncActionType = {
  pending: string;
  fulfilled: string;
  rejected: string;
}

export interface ErrorResponse {
  code: number;
  message: string;
}

export interface RootReducer {
  auth: AuthState;
}
