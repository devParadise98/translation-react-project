import { createBrowserRouter } from 'react-router-dom';
import Home from '../view/Home';
import Register from '../view/Register';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export { routes };
