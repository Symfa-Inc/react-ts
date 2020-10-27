/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import { store } from '@store/index';

export class LoginGuard {
  constructor(public redirectUrl: string) {
  }

  async canActivate(): Promise<boolean> {
    const { auth } = store.getState();

    return auth.isAuthenticated;
  }
}
