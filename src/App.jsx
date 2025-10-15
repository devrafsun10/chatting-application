import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './App.css'
import Login from './components/page/Login'
import Registration from './components/Page/Registration'
import firebaseConfig from "./components/firebase/firebaseConfig";

function App() {
 
  const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

  return (
    <>
     <RouterProvider router={router} />,
    </>
  )
}

export default App
