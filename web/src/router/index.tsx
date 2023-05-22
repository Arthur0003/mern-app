import { createBrowserRouter } from 'react-router-dom';

import { Root } from './Root';
import { Account, Accounts } from '../components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <Accounts />,
      },
      {
        path: '/accounts/:id',
        element: <Account />,
      },
    ],
  },
]);
