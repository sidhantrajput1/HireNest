
import { NavBar } from "../shared/NavBar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

function Signup() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="max-w-screen-xl mx-auto mt-4 flex justify-center items-center   p-4">
        <form className="w-1/2 flex flex-col gap-4 border border-gray-200 p-6 rounded-xl">
          <h1 className="font-bold">Sign up</h1>
          <div className="space-y-2">
            <div className="space-y-1">
              <label>Full Name</label>
              <Input type="text" placeholder="Hirenest..." />
            </div>
            <div className="space-y-1">
              <label>Email</label>
              <Input type="email" placeholder="hirenest@gmail.com" />
            </div>
            <div className="space-y-1">
              <label>Phone Number</label>
              <Input type="text" placeholder="9693610845" />
            </div>
            <div className="space-y-1">
              <label>Password</label>
              <Input type="password" placeholder="password@gmail.com" />
            </div>
          </div>
          <div className="">
            <RadioGroup defaultValue="student" className="flex items-center gap-3 ">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="r1" />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="recruiter" id="r2" />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
