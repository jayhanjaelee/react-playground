import { createBrowserRouter } from 'react-router';

import App from '../App.tsx';
import Playground from '../routes/Playground.tsx';
import Calculator from '../components/Calculator.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: 'playground',
    Component: Playground,
    children: [
      {
        path: 'calculator',
        Component: Calculator,
      },
    ],
  },
]);

export default router;
