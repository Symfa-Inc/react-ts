import React, { FC } from 'react';
import {
  BrowserRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';

import { Layout } from '@layout/index';
import { LoginPage } from '@pages/login';
import { ExtendedRoute } from '@wellyes/react-router-extended';
import { PAGES, PREFIX } from './pages';

export const BrowserRouter: FC = () => (
  <Router>
    <Switch>
      <ExtendedRoute path={PAGES.LOGIN_PAGE} component={LoginPage} />
      <Route path={`${PREFIX}/*`} component={Layout} />
      <Redirect exact from="/" to={PAGES.HOME_PAGE} />
    </Switch>
  </Router>
);
