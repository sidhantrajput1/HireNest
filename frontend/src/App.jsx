import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { NavBar } from "./components/shared/NavBar";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home";
import Job from "./components/Job";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";

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
  },
  {
    path : '/jobs',
    element : < Job/>
  },
  {
    path : '/description/:id',
    element : <JobDescription />
  },
  {
    path : '/browse',
    element : <Browse/>
  },
  {
    path : "/profile",
    element : <Profile/>
  }
])

export default function App() {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

