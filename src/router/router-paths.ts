import { ExtendedRouteProps } from '@wellyes/react-router-extended';

import { LoginPage } from '@pages/login';
import { HomePage } from '@pages/home';

import { LoginGuard } from '@guards/login.guard';

import { PAGES } from './pages';

export const routes: ExtendedRouteProps[] = [
  {
    path: PAGES.LOGIN_PAGE,
    component: LoginPage,
  },
  {
    path: PAGES.HOME_PAGE,
    component: HomePage,
    guards: [new LoginGuard(PAGES.LOGIN_PAGE)],
  },
];
