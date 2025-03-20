# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
          aria-describedby="profile-update-description"
        >
          <DialogHeader className="flex flex-row justify-between items-center p-3">
            <DialogTitle className="font-bold font-serif">
              Update Profile
            </DialogTitle>
            <button onClick={() => setOpen(() => !open)}>X</button>
          </DialogHeader>
          <form className="font-serif font-medium" onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  name="name"
                  className="col-span-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  name="email"
                  className="col-span-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Number
                </Label>
                <Input
                  id="number"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  name="number"
                  className="col-span-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  name="bio"
                  className="col-span-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  name="skills"
                  className="col-span-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="resume" className="text-right">
                  Resume
                </Label>
                <Input
                  id="resume"
                  name="resume"
                  accept="application/pdf"
                  className="col-span-2"
                  type="file"
                  // value={input.file}
                  onChange={fileChangeHandler}
                />
              </div>
            </div>
            {/* <div className="flex justify-end">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="ml-2">
                Save Changes
              </Button>
            </div> */}
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



function UpdateProfileDialog({ open, setOpen }) {
//   const [loading, setLoading] = useState(false);
//   const { user } = useSelector((store) => store.auth);

//   const [input, setInput] = useState({
//     fullname: user?.fullname,
//     email: user?.email || "",
//     phoneNumber: user?.phoneNumber,
//     bio: user?.profile?.bio || "",
//     skills: user?.profile?.skills?.join(", ") || "", // convert array to comma-separated string
//     file: user?.profile?.resume || null,
//   });

//   function changeEventHandler(e) {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   }

//   function fileChangeHandler(e) {
//     const file = e.target.files?.[0];
//     setInput({ ...input, file });
//   }

//   const dispatch = useDispatch();

//   async function submitHandler(e) {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("fullname", input.fullname);
//     formData.append("email", input.email);
//     formData.append("phoneNumber", input.phoneNumber);
//     formData.append("Bio", input.bio);
//     formData.append("skills", input.skills);

//     if (input.file) {
//       formData.append("resume", input.file);
//     }    

//     try {
//       const res = await axios.post('http://localhost:8000/api/v1/user/profile/update', formData , {
//         headers : {
//           'Content-Type' : 'multipart/form-data'
//         },
//         withCredentials : false
//       })
//       if(res.data.success) {
//         dispatch(setUser(res.data.user));
//         toast.success(res.data.message)
//       }
//     } catch (error) {
//       console.log(error) 
//     }
//     setOpen(false)
//     console.log(input);
//   }

//   return (
//     open && (
//       <div className="bg-white mx-auto max-w-xl border p-6 rounded-2xl m-6 shadow-lg relative">
//         <div className="flex items-center justify-between pb-4 border-b">
//           <h2 className="font-semibold font-serif text-lg text-gray-800">
//             Update Profile
//           </h2>
//           <button
//             onClick={() => setOpen(false)}
//             className="text-gray-500 hover:text-gray-700 text-xl font-bold"
//           >
//             &times;
//           </button>
//         </div>

//         {/* Form Section */}
//         <form onSubmit={submitHandler}>
//           <div className="my-6 space-y-6">
//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="name"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={input.fullname}
//                 onChange={changeEventHandler}
//                 className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="email"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={input.email}
//                 onChange={changeEventHandler}
//                 className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none"
//                 placeholder="hirenest@gmail.com"
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="number"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Number
//               </label>
//               <input
//                 type="number"
//                 name="number"
//                 id="number"
//                 value={input.phoneNumber}
//                 onChange={changeEventHandler}
//                 className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none"
//                 placeholder="+91 96936 10845"
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="bio"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Bio
//               </label>
//               <input
//                 type="text"
//                 name="bio"
//                 id="bio"
//                 value={input.bio}
//                 onChange={changeEventHandler}
//                 className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none"
//                 placeholder="I am a frontend developer"
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="skills"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Skills
//               </label>
//               <input
//                 type="text"
//                 name="skills"
//                 id="skills"
//                 value={input.skills}
//                 onChange={changeEventHandler}
//                 className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none"
//                 placeholder="like: js, react.js, node.js"
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="resume"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Resume
//               </label>
//               <input
//                 id="resume"
//                 name="resume"
//                 accept="application/pdf"
//                 onChange={fileChangeHandler}
//                 type="file"
//                 className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none"
//               />
//             </div>
//           </div>
//           <div className="flex justify-end gap-3 pt-4 border-t">
//           <button
//             onClick={() => setOpen(false)}
//             className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-150 ease-in-out"
//           >
//             Cancel
//           </button>
//           {/* <button
//             className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
//           >
//             Update
//           </button> */}

//           {loading ? (
//             <Button>
//               <Loader2 className="mr-2 w-4 h-4 animate-spin" />
//               Please Wait
//             </Button>
//           ) : (
//             <Button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out">
//               Update
//             </Button>
//           )}
//         </div>
//         </form>
//         {/* Action Buttons */}
//       </div>
//     )
//   );
// }

// export default UpdateProfileDialog;

// import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
// import { DialogFooter, DialogHeader } from "./ui/dialog";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import axios from "axios";
// import { setUser } from "@/redux/authSlice";
// import { toast } from "sonner";
// import { Loader2 } from "lucide-react";

// // eslint-disable-next-line react/prop-types
// function UpdateProfileDialog({ setOpen, open }) {
//   const [loading, setLoading ] = useState(false);
//   const { user } = useSelector((store) => store.auth);
//   const [input, setInut] = useState({
//     fullname: user?.fullname,
//     email: user?.email,
//     phoneNumber: user?.phoneNumber,
//     bio: user?.profile?.bio,
//     skills: user?.profile?.skills?.map((skill) => skill),
//     file: user?.profile?.resume,
//   });

//   const dispatch = useDispatch()

//   function changeEventHandler(e) {
//     setInut({ ...input, [e.target.name]: e.target.value });
//   }

//   function fileChangeHandler(e) {
//     const file = e.target.files?.[0];
//     setInut({...input , file});
//   }

//   async function submitHandler(e) {
//     e.preventDefault();
//     console.log(input)

//     const formData = new FormData();
//     formData.append("fullname", input.fullname);
//     formData.append("email", input.email);
//     formData.append("phoneNumber", input.phoneNumber);
//     formData.append("bio", input.bio);
//     formData.append("skills", input.skills);
//     if(input.file) {
//       formData.append("file" , input.file)
//     }

//     try {
//       const res = await axios.post("http://localhost:8000/api/v1/user/profile/update", formData, {
//         headers : {
//           'Content-Type' : 'multipart/form-data'
//         },
//         withCredentials : true
//       });

//       if(res.data.success) {
//         dispatch(setUser(res.data.user))
//         toast.success(res.data.message)
//       }
//     } catch (error) {
//       console.log(error)
//       toast.success(error.response.data.message)
//     }
//     setOpen(false)
//   }

//   return (
//     <div className="bg-white mx-auto max-w-xl border p-4 text-center rounded-2xl m-6">
//       <Dialog open={open}>
//         <DialogContent
//           className="sm:max-w-[425px]"
//           onInteractOutside={() => setOpen(false)}
//         >
//           <DialogHeader className="flex flex-row justify-between items-center p-3">
//             <DialogTitle className="font-bold font-serif">
//               Update Profile
//             </DialogTitle>
//             <button onClick={() => setOpen(() => !open)}>X</button>
//           </DialogHeader>
//           <form className="font-serif font-medium" onSubmit={submitHandler}>
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="name" className="text-right">
//                   Name
//                 </Label>
//                 <Input
//                   id="name"
//                   value={input.fullname}
//                   onChange={changeEventHandler}
//                   name="name"
//                   className="col-span-2"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="email" className="text-right">
//                   Email
//                 </Label>
//                 <Input
//                   id="email"
//                   value={input.email}
//                   onChange={changeEventHandler}
//                   name="email"
//                   className="col-span-2"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="number" className="text-right">
//                   Number
//                 </Label>
//                 <Input
//                   id="number"
//                   value={input.phoneNumber}
//                   onChange={changeEventHandler}
//                   name="number"
//                   className="col-span-2"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="bio" className="text-right">
//                   Bio
//                 </Label>
//                 <Input
//                   id="bio"
//                   value={input.bio}
//                   onChange={changeEventHandler}
//                   name="bio"
//                   className="col-span-2"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="skills" className="text-right">
//                   Skills
//                 </Label>
//                 <Input
//                   id="skills"
//                   value={input.skills}
//                   onChange={changeEventHandler}
//                   name="skills"
//                   className="col-span-2"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="resume" className="text-right">
//                   Resume
//                 </Label>
//                 <Input
//                   id="resume"
//                   name="resume"
//                   accept="application/pdf"
//                   className="col-span-2"
//                   type="file"
//                   // value={input.file}
//                   onChange={fileChangeHandler}
//                 />
//               </div>
//             </div>
//             {/* <div className="flex justify-end">
//               <Button variant="outline" onClick={() => setOpen(false)}>
//                 Cancel
//               </Button>
//               <Button type="submit" className="ml-2">
//                 Save Changes
//               </Button>
//             </div> */}
//             <DialogFooter>
//             {loading ? (
//             <Button>
//               <Loader2 className="mr-2 w-4 h-4 animate-spin" />
//               Please Wait
//             </Button>
//           ) : (
//             <Button className="bg-neutral-800 my-1">Update</Button>
//           )}
//             </DialogFooter>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default UpdateProfileDialog;
