import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "../shared/NavBar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { useState } from "react";
import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    role: "student",
    phoneNumber: "",
    password: "",
    file: "",
  });

  const navigate = useNavigate()

  function changeEventHandler(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function fileHandler(e) {
    setInput({ ...input, file: e.target.files?.[0] });
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("fullname", input.fullname);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("password", input.password);
      formData.append("role", input.role);

      if (input.file) {
        formData.append("profilePhoto", input.file);  // Attach the file
      }

      const res = await axios.post("http://localhost:8000/api/v1/user/register", formData, {
        headers : {
          "content-Type" : "application/json"
        },
        withCredentials : false
      });

      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message);
      }

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="max-w-screen-xl mx-auto mt-4 flex justify-center items-center   p-4">
        <form
          onSubmit={submitHandler}
          className="w-1/2 flex flex-col gap-4 border border-gray-200 p-6 rounded-xl"
        >
          <h1 className="font-bold">Sign up</h1>
          <div className="space-y-2">
            <div className="space-y-1">
              <label>Full Name</label>
              <Input
                type="text"
                value={input.fullname || ""}
                name="fullname"
                onChange={changeEventHandler}
                placeholder="Hirenest..."
              />
            </div>
            <div className="space-y-1">
              <label>Email</label>
              <Input
                type="email"
                value={input.email || ""}
                name="email"
                onChange={changeEventHandler}
                placeholder="hirenest@gmail.com"
              />
            </div>
            <div className="space-y-1">
              <label>Phone Number</label>
              <Input
                type="text"
                value={input.phoneNumber || ""}
                name="phoneNumber"
                onChange={changeEventHandler}
                placeholder="9693610845"
              />
            </div>
            <div className="space-y-1">
              <label>Password</label>
              <Input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="password@123"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-3 my-3  ">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  value="student"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  className="recriuiter"
                  type="radio"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  name="role"
                  value="recruiter"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <input
                accept="image/*"
                type="file"
                onChange={fileHandler}
                className="cursor-pointer"
              />
            </div>
          </div>
          <Button className="bg-neutral-800 my-1">Signup</Button>
          <span className="text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-400 cursor-pointer underline underline-offset-1"
            >
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
