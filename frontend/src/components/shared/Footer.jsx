import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="">
      <div className="mt-16 mx-auto max-w-screen-xl font-serif">
        <div className="flex flex-col md:py-2 ">
          {/* Social Networks Section */}
          <div className="flex sm:flex-row sm:gap-1 justify-between text-xl bg-gray-100 p-6 font-serif ">
            <h3 className="mb-4 sm:mb-0 ">Get Connected with us on social networks</h3>
            <div className="flex gap-4 justify-center ">
              <Instagram />
              <Twitter />
              <Linkedin />
              <Facebook />
            </div>
          </div>

          {/* Main Footer Section */}
          <div className="p-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 bg-gray-300/45 container md:py-2 ">
            {/* Company Info */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold font-serif">
                Hire<span className="text-blue-400">Nest</span>
              </h3>
              <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>

            {/* About Us Section */}
            <div className="space-y-2">
              <div>
                <h3 className="text-xl font-semibold mb-4">About Us</h3>
                <p className="text-sm mb-4 max-w-xs">
                  HireNest is your go-to platform for connecting job seekers with top companies. Our mission is to empower job seekers and help businesses find the best talent quickly and efficiently.
                </p>
                <a href="#" className="transition">
                  Learn More &rarr;
                </a>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Job Listings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Company Profiles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Resume Building
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Career Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Application Tracking
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <div className="flex gap-1 flex-col">
                <h3 className="text-xl font-semibold mb-2 ">Contact Us</h3>
                <p className="text-sm">
                  <strong className="hover:text-orange-300">Phone:</strong> +(91) 9693610845
                </p>
                <p className="text-sm">
                  <strong className="hover:text-orange-300">Email:</strong> support@hirenest.com
                </p>
                <p className="text-sm">
                  <strong className="hover:text-orange-300">Address:</strong> 123 Job Portal St., Noida, India
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-10 border-t pt-6 text-center text-sm">
            <p>&copy; 2024 HireNest. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
