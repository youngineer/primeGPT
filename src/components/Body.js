import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Movies from "./Movies"
import Login from './Login'
import TvShows from "./TvShows"
import Browse from "./Browse"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user.uid;
              dispatch(addUser(uid, email, displayName));
            } else {
              dispatch(removeUser());
            }
          });
    }, []);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;