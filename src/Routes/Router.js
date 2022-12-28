import Login from "../Components/Pages/Login/Login";
import Profile from "../Components/Pages/Profile/Profile";
import Register from "../Components/Pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Components/Pages/Home/Home");
const { default: Main } = require("../LayOut/Main");

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
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
        ]
    }
]);

export default router;
