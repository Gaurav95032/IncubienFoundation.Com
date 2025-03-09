import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../ui/Header'
import Footer from '../ui/Footer'

const AppLayout = () => {
  return (
      <>
          <Header />
          <Outlet />
          <Footer />
      </>
  )
}

export default AppLayout