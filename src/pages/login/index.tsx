import React, { FC } from 'react';
// import { useDispatch } from 'react-redux';
// import { PAGES } from '@router/pages';
import { useHistory } from 'react-router-dom';
// import { loginWorker } from '@store/auth/auth.actions';

import './login.scss';

export const LoginPage: FC = () => {
  const history = useHistory();
  console.log(history);
  // const dispatch = useDispatch();

  return (
    <div className="login">
      <div className="login__form">
        <button
          type="button"
          onClick={(): void => {
            // dispatch(loginWorker({
            //   // password, email,
            // }, {
            //   cOnSuccess: () => {
            //     history.push(PAGES.HOME_PAGE);
            //   },
            //   cOnFail: () => {
            //     console.log('failed to login');
            //   },
            //   formData: true, // default to false
            // }));
          }}
        >
          Log in
        </button>
      </div>
    </div>
  );
};
