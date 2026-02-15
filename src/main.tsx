import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from './theme.ts';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import HomePage from '@pages/HomePage/HomePage.tsx';
import MoviePage from '@pages/MoviePage/MoviePage.tsx';
import EditMoviePage from '@pages/ManageMoviePage/EditMoviePage/EditMoviePage.tsx';
import CreateMoviePage from '@pages/ManageMoviePage/CreateMoviePage/CreateMoviePage.tsx';
import LoginPage from '@pages/LoginPage/LoginPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: '/:movieId',
            element: <MoviePage />,
            children: [
              {
                path: '/:movieId/:edit-movie',
                element: <EditMoviePage />,
              },
            ],
          },
          {
            path: '/create-movie',
            element: <CreateMoviePage />,
          },
        ],
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const theme = createTheme(themeOptions);

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
