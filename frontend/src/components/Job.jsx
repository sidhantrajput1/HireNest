// import Footer from "./shared/Footer"
import Jobs from "./Jobs";
import FilterCard from "./FilterCard";
import { NavBar } from "./shared/NavBar";

const jobArray = [1, 2, 3, 4, 5, 6, 7, 8];

function Job() {
  return (
    <div>
      <NavBar />
      <div className="mx-auto max-w-screen-xl mt-8">
        <div className="flex gap-6">
          <div className="w-[20%]">
            <FilterCard />
          </div>
          <>
            {jobArray.length > 0 ? (
              <div>
                <div className="flex-1 overflow-y-auto pb-5 h-[88vh]">
                  <div className="grid grid-cols-2 ">
                    {jobArray.map((job, i) => (
                      <Jobs key={i}></Jobs>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <p>job not found</p>
            )}
          </>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Job;
