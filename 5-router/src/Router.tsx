import { createBrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import { Movies } from './components/Movies';
import { Movie } from './components/Movie';
import { Layout } from './components/Layout';
import { moviesLoader } from './loaders/moviesLoader';
import { ErrorPage } from './components/ErrorPage';
import { movieLoader } from './loaders/movieLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        index: true,
      },
      {
        path: '/movies',
        element: <Movies></Movies>,
        loader: moviesLoader,
      },
      {
        path: '/movie/:id',
        element: <Movie></Movie>,
        loader: movieLoader,
      },
    ],
  },
]);
