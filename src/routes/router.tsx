import { createBrowserRouter } from 'react-router';

import App from '../App.tsx';
import Layout from '../components/Layout.tsx';
import Calculator from '../components/Calculator.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: 'playground',
    Component: Layout,
    children: [
      {
        path: 'calculator',
        Component: Calculator,
      },
    ],
  },
]);

export default router;
