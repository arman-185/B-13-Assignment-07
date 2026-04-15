import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../Pages/Homepage/HomePage";
import TimeLines from "../Pages/Timelines/TimeLines";
import Stats from "../Pages/Stats/Stats";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import FriendsDetails from "../Pages/FriendsDetails";

export const router = createBrowserRouter ([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: ()=> fetch("/data.json")
      },
      {
        path:"/friends/:id",
        element: <FriendsDetails />
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
    errorElement: <NotFoundPage />
  },
]);