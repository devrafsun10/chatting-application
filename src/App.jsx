import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './App.css'
import Login from './components/page/Login'
import Registration from './components/Page/Registration'
import firebaseConfig from "./components/firebase/firebaseConfig";
import ForgotPassword from "./components/page/ForgotPassword";
import Home from "./components/page/Home";

function App() {
 
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/registration",
    element: <Registration/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword/>,
  },
]);

  return (
    <>
     <RouterProvider router={router} />,
    </>
  )
}

export default App
