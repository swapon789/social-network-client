import ErrorElement from "../Components/Pages/ErrorElement/ErrorElement";
import Login from "../Components/Pages/Login/Login";
import Media from "../Components/Pages/Media/Media";
import MediaDetails from "../Components/Pages/MediaDetails";

import Profile from "../Components/Pages/Profile/Profile";
import Register from "../Components/Pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Components/Pages/Home/Home");
const { default: Main } = require("../LayOut/Main");

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/media',
                element:<Media></Media>
            },
            {
                path:'/postdetails/:id',
                element: <MediaDetails></MediaDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/postdetails/${params.id}`)
            },
        ]
    }
]);

export default router;
