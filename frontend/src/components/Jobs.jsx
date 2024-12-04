import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

function Jobs() {
  return (
    <div className="shadow hover:shadow-xl shadow-cyan-400/20 flex flex-col border border-spacing-2 gap-4 mix-blend-multiply p-5 mt-4 rounded-xl m-3">
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="rounded-xl" size="icon">
          <Avatar className="">
            <AvatarImage
              className="h-8 rounded p-1"
              src="https://w7.pngwing.com/pngs/868/880/png-transparent-hotel-rating-computer-icons-company-building-text-photography-thumbnail.png"
            />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Microsoft Private Limited</h1>
          <p className="text-gray-400">India</p>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-semibold">Full Stack Developer</h1>
        <p>
          Join our team at Microsoft as a Full Stack Developer. You will work with
          modern technologies like React, Node.js, and MongoDB to build and
          maintain scalable applications. 
        </p>
      </div>
      <div className="flex gap-2">
        <Badge className="font-serif font-bold text-blue-600" variant="ghost">
          12 Positions
        </Badge>
        <Badge className="font-serif font-bold text-[#F83002]" variant="ghost">
          Full Time
        </Badge>
        <Badge className="font-serif font-bold text-[#7209b7]" variant="ghost">
          24 LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline">Details</Button>
        <Button variant="outline">Save for later</Button>
      </div>
    </div>
  );
}

export default Jobs;
