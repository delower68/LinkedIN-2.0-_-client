import ErrorPage from "../ErrorPage/ErrorPage";
import EditProfile from "../LayOut/EditProfile/EditProfile";
import Main from "../LayOut/Main";
import AllPost from "../Pageses/AllPost/AllPost";
import ShowDetailsPost from "../Pageses/AllPost/ShowDetailsPost";
import Home from "../Pageses/Home/Home/Home";
import Login from "../Pageses/Shared/Login/Login";
import SignUp from "../Pageses/Shared/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/media",
        element: <AllPost />,
      },
      {
        path: "/media/:id",
        element: (
          <PrivateRoute>
            <ShowDetailsPost />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://linked-in-2-0-eight.vercel.app/posts/${params.id}`),
      },
    ],
  },
]);
