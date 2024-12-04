import CategoryCarousel from "./CategoryCarousel"
import Footer from "./shared/Footer"
import HeroSection from "./HeroSection"
import LatestJobs from "./LatestJobs"
import { NavBar } from "./shared/NavBar"

function Home() {
    return (
        <div className="">
            <NavBar/>
            <HeroSection />
            <CategoryCarousel />
            <LatestJobs />
            <Footer/>
        </div>
    )
}

export default Home
