import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Root from './routes/root.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import Welcome from './components/Welcome.jsx';
import Blog from './components/Blog.jsx';
import Techstack from './components/Techstack.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/nabar',
        element: <Navbar />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/welcome',
        element: <Welcome />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/techstack',
        element: <Techstack />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
