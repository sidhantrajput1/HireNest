import { Search } from "lucide-react";

function HeroSection() {
  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <div className="text-center flex flex-col justify-center items-center gap-6 my-10">
        <span className="mx-auto px-6 py-3 rounded-full bg-gray-300 font-medium">
          No. 1 <span className="font-semibold font-serif">Hire</span>
          <span className="text-blue-400 font-semibold font-serif">Nest </span>
          Website
        </span>
        <h1 className="font-bold text-4xl leading-snug">
          Search, Apply & <br /> Get Your
          <span className="text-[#6A38C2]"> Dream Job</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          doloremque vero illo similique alias!
        </p>
        <div className="border-gray-600 w-[45%] flex justify-center items-center relative">
          <input
            type="search"
            className="rounded-full p-3 border-2 w-full outline-none pr-12"
            placeholder="Find your dream jobs"
          />
          <button className="absolute right-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
            <Search className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
