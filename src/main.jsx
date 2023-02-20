import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Nuevocliente from './pages/Nuevocliente'
import Index from './pages/Index'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path:'/clientes/nuevo',
        element: <Nuevocliente />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider  router={router}/>
  </React.StrictMode>,
)
