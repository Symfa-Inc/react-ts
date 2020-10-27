import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { isAuthenticatedData } from '@store/auth/auth.selectors';
import { Loader } from '@components/loader';
import { BrowserRouter } from '@router/index';

export const App: FC = () => {
  // const dispacth = useDispatch();
  const { loading } = useSelector(isAuthenticatedData);

  // useEffect(() => {
  //    (async () => { dispacth(userAuthenticatedWorker()); })();
  // }, []);

  return loading ? <Loader /> : <BrowserRouter />;
};
