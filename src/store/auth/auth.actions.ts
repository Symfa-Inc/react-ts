import { actionCreatorFactory, initWorker, AsyncActionCreators } from '@wellyes/redux-kit';
import axios from '@utils/axios';

import { User } from './types';
import { ErrorResponse } from '../types';

const payloadedWorker = initWorker(axios);
const actionCreator = actionCreatorFactory('user');

export const login: AsyncActionCreators<object, User, ErrorResponse> = actionCreator.async<object, User, ErrorResponse>('LOGIN');

export const loginWorker = payloadedWorker(login, '/auth', 'post');
