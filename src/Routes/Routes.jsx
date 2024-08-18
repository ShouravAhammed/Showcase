import {
    createBrowserRouter,
} from "react-router-dom";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
      ]
    },
    {
        path: "/signUp",
        element: <SignUp/>
    },
    {
        path: "/Login",
        element: <Login/>
    }
  ]);
export default router;