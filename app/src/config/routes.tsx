import { createBrowserRouter } from 'react-router-dom';
import Home from '../view/Home';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "register",
    element: <div>Hola mundo register</div>,
  },
]);

export { routes };
