import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorPage from './error-page'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from "./routes/menu";
import Home from "./routes/home";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
      path: "menu",
      element: <Menu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
