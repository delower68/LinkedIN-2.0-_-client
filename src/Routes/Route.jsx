import ErrorPage from "../ErrorPage/ErrorPage";
import EditProfile from "../LayOut/EditProfile/EditProfile";
import Main from "../LayOut/Main";
import AllPost from "../Pageses/AllPost/AllPost";
import ShowDetailsPost from "../Pageses/AllPost/ShowDetailsPost";
import Home from "../Pageses/Home/Home/Home";
import Login from "../Pageses/Shared/Login/Login";
import SignUp from "../Pageses/Shared/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");


export const  router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/profile',
                element: <EditProfile/>
            },
            {
                path: '/media',
                element: <AllPost/>
            },
            {
                path: "/media/:id",
                element: <ShowDetailsPost />,
                loader: ({ params }) =>
                  fetch(
                    `http://localhost:4000/posts/${params.id}`
                  ),
              }
        ]
        
    }
])