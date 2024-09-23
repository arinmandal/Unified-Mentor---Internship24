import './index.css';
import { SignIn } from './Pages/SignIn';
import HelpPage from './Pages/HelpPage';
import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from './components/Main';
import RestaurantMenu from './components/RestaurantMenu';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/help',
        element: <HelpPage />
      },
      {
        path: '/signIn',
        element: <SignIn />
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu/>  
      }

    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
