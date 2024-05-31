import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from '../Root';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "",
        element: <Home/>
      },
      {
        path: "menu",
        element: <Menu/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
     
    ]
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}
