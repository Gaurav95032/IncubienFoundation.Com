import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import About from './pages/About'
import Services from './pages/Services'
import Mentorship from './pages/Mentorship'
import Resources from './pages/Resources'
import Home from './pages/Home'
import LatestIncubine from './components/LatestIncubine'
import EventDetails from './components/EventDetails'
import Footer from './components/ui/Footer'
import LearnMore from './components/LearnMore'
import ContactUs from './components/ContactUs'
import KnowMorePage from './components/KnowMorePage'
import ResourceDetail from './components/ResourceDetail'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/About', element: <About /> },
      { path: '/Services', element: <Services /> },
      { path: '/Mentorship', element: <Mentorship /> },
      { path: '/Resources', element: <Resources /> },
      { path: '/events', element: <LatestIncubine /> }, // Route for event listings
      { path: '/event/:id', element: <EventDetails /> }, // Route for event details
      { path: '/learnmore/:id', element: <LearnMore /> }, // <Route path="/learn-more/:id" element={<LearnMore />}, 
      { path: '/footer', element: <Footer /> },
      { path: '/contactus', element: <ContactUs /> },
      { path: '/knowmorepage/:schemeId', element: <KnowMorePage /> },
      {path: "/resources/:id", element: <ResourceDetail />} 
    ]
  }
])

const App = () => {
  return <RouterProvider router={Router} />
}

export default App
