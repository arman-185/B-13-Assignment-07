import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './Router/Routes';
import TimelinesProvider from './Context/TimelinesProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelinesProvider>
      <RouterProvider router={router} />
    </TimelinesProvider>

  </StrictMode>,
)
