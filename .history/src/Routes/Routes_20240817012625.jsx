import {
    createBrowserRouter,
} from "react-router-dom";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
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