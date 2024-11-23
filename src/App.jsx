import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layout/Main'
import Popular from './pages/Popular'
import Upcoming from './pages/Upcoming'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main />, children: [
        { index: true, element: <Popular /> },
        { path: "/upcoming", element: <Upcoming /> }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

//2:07:01

