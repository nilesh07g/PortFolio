import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './pages/About/About.jsx';
import Resume from './pages/Resume/Resume.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Blogs from './Blogs/Blogs.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children: [
        {
            path: "/",
            element:<About/>,
        },

        {
            path: "/resume",
          element:<Resume/>,
        },
        {
          path: "/portfolio",
          element:<Portfolio/>,
        },
        {
          path: "/project/:id",
          element:<ProjectDetails/>,
        },
        {
          path: "blogs",
          element:<Blogs/>,
        },
        {
          path: "contact",
      element:<Contact/>,
        }

    ]

  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
