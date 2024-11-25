import { Link } from "react-router-dom";
import { NavBar } from "../shared/NavBar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup} from "../ui/radio-group";
// import { useState } from "react";

function Login() {
    
    

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="max-w-screen-xl mx-auto mt-4 flex justify-center items-center   p-4">
        <form className="w-1/2 flex flex-col gap-4 border border-gray-200 p-6 rounded-xl">
          <h1 className="font-bold">Login</h1>
          <div className="space-y-2">
            <div className="space-y-1">
              <label>Email</label>
              <Input type="email" placeholder="hirenest@gmail.com" />
            </div>
            <div className="space-y-1">
              <label>Password</label>
              <Input type="password" placeholder="password@gmail.com" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup
              className="flex items-center gap-3 my-1  "
            >
              <div className="flex items-center space-x-2">
                <Input
                  className="student"
                  type="radio"
                  name="role"
                  value="Student"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  className="recriuiter"
                  type="radio"
                  name="role"
                  value="recruiter"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>

          </div>
          <Button className="bg-neutral-800 my-1">Login</Button>
          <span className="text-sm">Don&apos;t have an account? <Link to="/signup" className="text-blue-400 cursor-pointer underline underline-offset-1">Sign up</Link></span>
        </form>
      </div>
    </div> 
  );
}

export default Login;
