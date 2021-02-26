import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import { routes } from '@router/router-paths';
import { ExtendedRoute } from '@wellyes/react-router-extended';

export const Layout: FC = () => (
  <>
    <Switch>
      {routes.map((route) => (
        <ExtendedRoute
          key={route.path?.toString()}
          {...route}
        />
      ))}
    </Switch>
  </>
);
