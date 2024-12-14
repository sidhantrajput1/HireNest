import { Calendar, Mail, User } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function JobDescription() {
  const isApplied = false;

  return (
    <div className="max-w-6xl mx-auto  my-10">
      <div className="flex  gap-4 justify-between">
        <div className="flex gap-4 items-center">
          <img
            className="h-10 rounded-lg "
            src="https://w7.pngwing.com/pngs/868/880/png-transparent-hotel-rating-computer-icons-company-building-text-photography-thumbnail.png"
          />
          <div>
            <h1 className="font-bold text-xl">Full Stack Developer</h1>
            <p className="font-sans text-sm text-gray-500">Hire Nest</p>
          </div>
        </div>
        <Button
          disabled={isApplied}
          variant="outline"
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-300/60 cursor-not-allowed"
              : "cursor-pointer bg-green-300"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <div className="flex gap-2 justify-between">
        <div className="flex gap-2 mt-4 items-center">
          <Badge className="font-serif font-bold text-blue-600" variant="ghost">
            12 Postions
          </Badge>
          <Badge
            className="font-serif font-bold text-[#F83002]"
            variant="ghost"
          >
            Part Time
          </Badge>
          <Badge
            className="font-serif font-bold text-[#7209b7]"
            variant="ghost"
          >
            24 LPA
          </Badge>
        </div>
      </div>
      <h1 className="border-b-2 py-4 font-bold">Job Description</h1>
      <div className="flex gap-4 flex-col">
        <div>
          <h1 className="font-bold pt-4">Key Responsibilities</h1>
          <div className="flex gap-4 flex-col mt-2">
            <p>
              As a Full Stack Development intern at The Inceptioners, you will
              have the opportunity to work with cutting-edge technologies such
              as Node.js, MongoDB, Next.js, and ReactJS. You will be an integral
              part of our dynamic team, collaborating with experienced
              developers to create innovative software solutions. Your
              responsibilities will include:
            </p>
            <ul>
              <li>
                1. Developing and maintaining web applications using Node.js and
                MongoDB
              </li>
              <li>2. Implementing user interfaces with Next.js and ReactJS</li>
              <li>3. Writing clean, efficient, and well-documented code</li>
              <li>
                4. Collaborating with cross-functional teams to ensure project
                success
              </li>
              <li>
                5. Participating in code reviews and providing constructive
                feedback
              </li>
              <li>
                6. Troubleshooting and debugging issues to optimize performance
              </li>
              <li>
                6. Keeping up-to-date with the latest industry trends and
                technologies
              </li>
            </ul>
            <p>
              Join us at The Inceptioners and kickstart your career as a Full
              Stack developer!
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold">Skills(s) Required</h1>
          <div className="mt-3 flex gap-4">
            <Badge className="rounded-xl bg-slate-100 py-1" variant="outline">
              Express.js
            </Badge>
            <Badge className="rounded-xl bg-slate-100 py-1" variant="outline">
              Node.js
            </Badge>
            <Badge className="rounded-xl bg-slate-100 py-1" variant="outline">
              ReactJS
            </Badge>
            <Badge className="rounded-xl bg-slate-100 py-1" variant="outline">
              Next.js
            </Badge>
            <Badge className="rounded-xl bg-slate-100 py-1" variant="outline">
              MongoDB
            </Badge>
            <Badge className="rounded-xl bg-slate-100 py-1" variant="outline">
              PostgreSQL
            </Badge>
            <Badge className="rounded-xl bg-slate-100 py-1" variant="outline">
              Tailwind CSS
            </Badge>
          </div>
        </div>

        <div>
          <h1 className="font-bold">Perks</h1>
          <div className="mt-3 flex gap-4">
            <Badge className="rounded-xl bg-slate-100 py-1" variant="outline">
              Certificate
            </Badge>
            <Badge className="rounded-xl bg-slate-100 py-1" variant="outline">
              Flexible work hours
            </Badge>
          </div>
        </div>

        <div>
          <h1 className="font-bold ">Activity on Internshala</h1>
          <div className="flex gap-3 mt-3">
            <div className="flex gap-2">
              <Calendar />
              <span>Hiring since November 2024</span>
            </div>
            <div className="flex gap-2">
              <Mail />
              <span>Hiring since November 2024</span>
            </div>
            <div className="flex gap-2">
              <User />
              <span>Hiring since November 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
