import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Movies from "./Movies"
import Login from './Login'
import TvShows from "./TvShows"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/movie",
            element: <Movies />
        },
        {
            path: "/tv",
            element: <TvShows />
        },
    ]);


  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;