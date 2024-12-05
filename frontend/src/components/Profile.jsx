import { NavBar } from "./shared/NavBar"
import { Avatar, AvatarImage } from "./ui/avatar"

function Profile() {
    return (
        <>
            <NavBar/>
            <div className="max-w-7xl mx-auto bg-white border border-gray-200 p-4 mt-12 rounded-2xl">
                <Avatar>
                    <AvatarImage src="https://w7.pngwing.com/pngs/868/880/png-transparent-hotel-rating-computer-icons-company-building-text-photography-thumbnail.png" />
                </Avatar>
                <h1>HireNest</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quidem?</p>
            </div>
        </>
    )
}

export default Profile
