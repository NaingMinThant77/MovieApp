import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layout/Main'
import Popular from './pages/Popular'
import Upcoming from './pages/Upcoming'
import Details from './pages/Details'
import Searched from './pages/Searched'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main />, children: [
        { index: true, element: <Popular /> },
        { path: "/upcoming", element: <Upcoming /> },
        { path: "/details/:id", element: <Details /> },
        { path: "/search/:title", element: <Searched /> }
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


