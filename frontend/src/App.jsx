import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { NavBar } from "./components/shared/NavBar";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home";

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path : '/login',
    element : <Login/>
  },
  {  
    path : '/signup',
    element : <Signup/>
  }
])

export default function App() {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

