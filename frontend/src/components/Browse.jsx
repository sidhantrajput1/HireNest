import Jobs from "./Jobs";
import { NavBar } from "./shared/NavBar";

const randomJobs = [1, 2, 3, 4];

function Browse() {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto mt-8 overflow-y-auto h-[88vh]">
        <h1 className="font-bold text-lg py-4">Search Results ({randomJobs.length})</h1>
        <div className="grid grid-cols-2">
        {randomJobs.map((item, idx) => {
          return <Jobs key={idx} />;
        })}
        </div>
      </div>
    </div>
  );
}

export default Browse;
