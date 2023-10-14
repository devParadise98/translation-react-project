import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from '../config/routes';
import { GlobalStyle } from '../ui/globalStyle';
import '../utils/i18n';

export const App: React.FC = () => (
  <>
    <RouterProvider router={routes} />
    <GlobalStyle />
  </>
);
