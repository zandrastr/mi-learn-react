import { createBrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import { Movies } from './components/Movies';
import { Movie } from './components/Movie';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/movies',
    element: <Movies></Movies>,
  },
  {
    path: '/movie/:id',
    element: <Movie></Movie>,
  },
]);
