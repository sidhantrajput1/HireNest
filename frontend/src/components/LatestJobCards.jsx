import { Badge } from "./ui/badge";

function LatestJobCards() {
  return (
    <div className="shadow hover:shadow-xl shadow-cyan-400/20 flex flex-col border border-spacing-2 gap-4 mix-blend-multiply p-5 mt-4 rounded-xl m-3">
      <div>
        <h2 className="font-medium text-lg">Microsoft Private Limited</h2>
        <p className="text-sm text-gray-500">India 📍</p>
      </div>
      <div className="flex gap-1 flex-col">
        <h3 className="font-medium text-pretty text-base">MERN Stack Developer</h3>
        <p>
          Proficient Experience Using Frontend Frameworks - React js, Next.js
        </p>
      </div>
      <div className="flex gap-2">
        <Badge className="font-serif font-bold text-blue-600" variant="ghost">
          12 Postions
        </Badge>
        <Badge className="font-serif font-bold text-[#F83002]" variant="ghost">
          Part Time
        </Badge>
        <Badge className="font-serif font-bold text-[#7209b7]" variant="ghost">
          24 LPA
        </Badge>
      </div>
    </div>
  );
}

export default LatestJobCards;
