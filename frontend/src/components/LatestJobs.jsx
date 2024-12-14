import LatestJobCards from "./LatestJobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function LatestJobs() {
  return (
    <div className="max-w-7xl my-20 mx-auto">
      <h1 className="text-3xl font-bold">
        <span className="text-[#d3805a]">Latest & Top</span> Job Openings
      </h1>
      <div className="grid grid-col grid-rows-3 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {randomJobs.map((job, i) => (
          <LatestJobCards key={i} />
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;
