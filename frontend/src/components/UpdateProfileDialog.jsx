/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });

  const dispatch = useDispatch()

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/profile/update",
        formData , {
          headers : {
            'Content-Type' : 'multipart/form-data'
          },
          withCredentials : true
        }
      );

      if(res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
    }

    setOpen(false);
    console.log(input);
  };

  return (
    <div className="">
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[485px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile </DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  name="name"
                  value={input.fullname}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  className="col-span-3"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Number
                </Label>
                <Input
                  id="number"
                  className="col-span-3"
                  name="number"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  className="col-span-3"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  className="col-span-3"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  type="file"
                  accept="application/pdf"
                  onChange={fileChangeHandler}
                  className="col-span-3"
                  name="file"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button className="bg-neutral-800 my-1">Update</Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
