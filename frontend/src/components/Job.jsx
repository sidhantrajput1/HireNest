// import Footer from "./shared/Footer"
import Jobs from "./Jobs"
import JobsCard from "./JobsCard"
import { NavBar } from "./shared/NavBar"

function Job() {
    return (
        <div>
            <NavBar/>
            <div className="">
                <JobsCard />
                <Jobs/>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Job
