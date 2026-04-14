import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import TimeLines from './Pages/Timelines/TimeLines';
import Stats from './Pages/Stats/Stats';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: 'Homepage',
      },
      {
        path: '/timeline',
        element: <TimeLines />
      },
      {
        path: '/stats',
        element: <Stats />
      },
    ],
    errorElement: "Page not found 404"
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
