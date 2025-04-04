import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  let Links = [
    { name: "Home", link: "/" },
    
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-sm w-full sticky top-0 left-0 z-10 border-b-1 bg-gray-100 ">
      <div className="flex items-center justify-between  py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center  
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          CURD 
        </div>

        <ul
          className={`flex flex-col md:flex-row items-center   md:items-center md:pb-0 pb-12 absolute md:static  shadow-md md:shadow-none md:z-auto z-[-1] left-0 w-full   md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${
            open ? "top-10 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 font-sans   text-xl font-semibold md:my-0 my-7"
            >
              <a
                href={link.link}
                className=" hover:text-blue-600 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl   right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? (
              <IoClose className="text-3xl md:hidden" />
            ) : (
              <GiHamburgerMenu className="text-3xl md:hidden" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;