import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Connexion from './components/Connexion.jsx'
import './index.css'
import './animations.css'
import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFound from './components/NotFound.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Connexion />,
      errorElement: <NotFound />
    },
    {
      path: '/pseudo/:pseudo',
      element: <App />,
      errorElement: <NotFound /> 
    },  
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
