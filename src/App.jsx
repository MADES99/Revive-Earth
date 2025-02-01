import React from 'react'
import './fonts/ClashDisplay-Variable.ttf'
import Navbar from './Components/Navbar'
import Landing from './Pages/Landing'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Technology from './Pages/Technology'
import NewsPage from './Pages/NewsPage'
import Contact from './Pages/Contact'
import RootLayout from './Layout/RootLayout'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Landing />} />
        <Route path='technology' element={<Technology />} />
        <Route path='news' element={<NewsPage />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  )
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App