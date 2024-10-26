import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Logo from "@/assests/icons/Logo.png";
import menu from "@/assests/icons/menu-bar.png";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const navList = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/",
    title: "Recipes",
  },
  {
    path: "/",
    title: "Blog",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto bg-gray-100">
        {/*----------------------------------------------- */}
        <div className="flex justify-between items-center py-2">
          <div className="flex justify-center py-3">
            <Image className="w-[60px] " src={Logo} alt="Logo" />
          </div>
          {/*>>>>>>>>> navList for large device >>>>>>>> */}
          <div className={`${poppins.className} flex items-center gap-5 uppercase`}>
            {
                navList.map(({path, title},index)=>(
            <ul key={index}>
                <li><Link href={path}>{title}</Link></li>
            </ul>

                ))
            }
            <button className="uppercase bg-orange-300 px-2 py-1 rounded-sm shadow-sm hover:shadow-md shadow-black hover:shadow-black">Login</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
