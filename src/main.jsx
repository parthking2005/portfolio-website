import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Main from './component/main/Main.jsx'
import Home from './component/home/Home.jsx'
import AboutMe from './component/aboutme/AboutMe.jsx'
import Education from './component/education/Education.jsx'
import Experience from './component/experience/Experience.jsx'
import Portfolio from './component/portfolio/Portfolio.jsx'
import ContactMe from './component/contactme/ContactMe.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <AboutMe />
      },
      {
        path: 'education',
        element: <Education />
      },
      {
        path: 'experience',
        element: <Experience />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'contact',
        element: <ContactMe />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


