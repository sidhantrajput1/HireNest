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
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
// import store from "@/redux/store";
// import { useState } from "react";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const { loading } = useSelector((store) => store.auth);
  const naigate = useNavigate();
  const dispatch = useDispatch();

  function changeEventHandler(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading());
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        input,
        {
          headers: {
            "content-Type": "application/json",
          },
          withCredentials: false,
        }
      );

      if (res.data.success) {
        naigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.log(error);
    } finally {
      dispatch(setLoading(false));
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
          <h1 className="font-bold">Login</h1>
          <div className="space-y-2">
            <div className="space-y-1">
              <label>Email</label>
              <Input
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                placeholder="hirenest@gmail.com"
              />
            </div>
            <div className="space-y-1">
              <label>Password</label>
              <Input
                type="password"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
                placeholder="password@123"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-3 my-1  ">
              <div className="flex items-center space-x-2">
                <Input
                  className="student"
                  type="radio"
                  name="role"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  value="Student"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  className="recriuiter"
                  type="radio"
                  name="role"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  value="recruiter"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button className="bg-neutral-800 my-1">Login</Button>
          )}
          <span className="text-sm">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-400 cursor-pointer underline underline-offset-1"
            >
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
