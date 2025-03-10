import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import StakingInterface from './pages/StakingInterface'
import Connect from './pages/Connect'
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/staking-interface',
          element: <StakingInterface />,
        },
        {
          path: '/connect',
          element: <Connect />,
        },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
