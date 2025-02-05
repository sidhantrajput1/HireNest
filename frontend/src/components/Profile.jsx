import { useState } from "react";
import AppliedJobTable from "./AppliedJobTable";
import { NavBar } from "./shared/NavBar";
import UpdateProfileDialog from "./UpdateProfileDialog";

function Profile() {
  const [open, setOpne] = useState(false);
  return (
    <div>
      <NavBar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-6 mt-12 rounded-2xl">
        <div className="flex gap-8 items-center justify-between">
          <div className="flex gap-6 items-center">
            <div>
              <img
                className="h-10"
                src="https://w7.pngwing.com/pngs/868/880/png-transparent-hotel-rating-computer-icons-company-building-text-photography-thumbnail.png"
                alt="logo"
              />
            </div>
            <div>
              <h3>HireNest</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <span className="cursor-pointer" onClick={() => setOpne(!open)}>X</span>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white border rounded-2xl mt-4 p-5">
        <h1 className="font-bold pl-2 my-3 text-lg">Applied Job</h1>
        <AppliedJobTable />
      </div>
      {open && <UpdateProfileDialog open={open} setOpen={setOpne} />}
    </div>
  );
}

export default Profile;

// import { Contact, Mail, Pen } from "lucide-react";
// import { NavBar } from "./shared/NavBar";
// import { Avatar, AvatarImage } from "./ui/avatar";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import AppliedJobTable from "./AppliedJobTable";
// import { useState } from "react";
// import UpdateProfileDialog from "./UpdateProfileDialog.jsx";

// const skills = ["JavaScript", "React.js", "Node.js", "Docker"];

// function Profile() {
//   const isResume = true;
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <NavBar />
//       <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-6 mt-12 rounded-2xl">
//         <div className="flex flex-col gap-3 justify-center">
//           <div className="flex justify-between">
//             <div className="flex gap-6 items-center">
//               <Avatar>
//                 <AvatarImage
//                   className=""
//                   src="https://w7.pngwing.com/pngs/868/880/png-transparent-hotel-rating-computer-icons-company-building-text-photography-thumbnail.png"
//                   alt="Company Logo"
//                 />
//               </Avatar>
//               <div>
//                 <h1>HireNest</h1>
//                 <p>
//                   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                   Nemo, quidem?
//                 </p>
//               </div>
//             </div>
//             <Button onClick={() => setOpen(true)} className="text-right" variant="outline" aria-label="Edit profile">
//               <Pen />
//             </Button>
//           </div>
//           <div className="">
//             <div className="flex gap-3 items-center">
//               <Mail /> <span>hirenest@gmail.com</span>
//             </div>
//             <div className="flex gap-3 items-center">
//               <Contact />
//               <span>9693610845</span>
//             </div>
//           </div>
//           <div className="flex flex-col gap-2 justify-center">
//             <h1 className="font-bold">Skills</h1>
//             <div className="flex gap-3 items-center">
//               {skills.length > 0
//                 ? skills.map((skill, index) => (
//                     <Badge variant="outline" key={index}>
//                       {skill}
//                     </Badge>
//                   ))
//                 : "No Skills"}
//             </div>
//           </div>
//           <div className="flex gap-4 items-center">
//             <h2 className="font-bold">Resume</h2>
//             {isResume ? (
//               <a
//                 className="font-normal px-3 py-1/5 border rounded-lg hover:bg-gray-100 transition-all"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href="https://github.com/sidhantrajput1"
//               >
//                 Download <span>&darr;</span>
//               </a>
//             ) : (
//               "Provide your resume"
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="max-w-4xl mx-auto bg-white border rounded-2xl mt-4 p-5">
//         <h1 className="font-bold pl-2 my-3 text-lg">Applied Job</h1>
//         <AppliedJobTable />
//       </div>
//       <UpdateProfileDialog open={open} setOpen={setOpen} />
//     </>
//   );
// }

// export default Profile;
