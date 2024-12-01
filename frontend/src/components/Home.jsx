import CategoryCarousel from "./CategoryCarousel"
import HeroSection from "./HeroSection"
import LatestJobs from "./LatestJobs"
import { NavBar } from "./shared/NavBar"

function Home() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <NavBar/>
            <HeroSection />
            <CategoryCarousel />
            <LatestJobs />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
