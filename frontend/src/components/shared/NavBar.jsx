import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

export function NavBar() {
  return (
    <nav className="max-w-screen-xl mx-auto mt-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold font-serif">
          Hire<span className="text-blue-400">Nest</span>
        </h3>
        <div className="flex items-center gap-10 ">
          <ul className="flex items-center gap-6 font-medium">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage className="w-10 h-10  rounded-full"
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-40 p-2 mt-2">
              <h3>Hello</h3>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
}
