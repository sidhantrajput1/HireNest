import { Badge } from "./ui/badge";

function LatestJobCards() {
  return (
    <div className="shadow hover:shadow-xl shadow-cyan-400/20 flex flex-col border border-spacing-2 gap-4 mix-blend-multiply p-5 mt-4 rounded-xl m-3">
      <div>
        <h2>Microsoft Private Limited</h2>
        <p>India 📍</p>
      </div>
      <div className="flex gap-1 flex-col">
        <h3>MERN Stack Developer</h3>
        <p>
          Proficient Experience Using Frontend Frameworks - React js, Next.js
        </p>
      </div>
      <div>
        <Badge className="font-serif font-bold text-blue-600" variant="ghost">
          12 Postions
        </Badge>
      </div>
    </div>
  );
}

export default LatestJobCards;
