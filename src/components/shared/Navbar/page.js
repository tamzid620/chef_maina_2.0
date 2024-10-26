"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Logo from "@/assests/icons/Logo.png";
import Menu from "@/assests/icons/menu-bar.png";

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
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto">
        {/*----------------------------------------------- */}
        <div className="flex justify-between items-center py-2 ">
          <div className="flex justify-center py-3">
            <Image className="w-[60px]" src={Logo} alt="Logo" />
          </div>
          {/*>>>>>>>>> navList for large device >>>>>>>> */}
          <div
            className={`${poppins.className} lg:flex md:hidden sm: hidden items-center gap-5 uppercase`}
          >
            {navList.map(({ path, title }, index) => (
              <ul key={index}>
                <li>
                  <Link href={path}>{title}</Link>
                </li>
              </ul>
            ))}
            <button className="uppercase bg-orange-300 px-2 py-1 rounded-sm shadow-sm hover:shadow-md shadow-black hover:shadow-black">
              Login
            </button>
          </div>
          {/*>>>>>>>>> navList for  Medium and Small  device >>>>>>>> */}
          
          {/* menu Button  */}
          <div className="relative lg:hidden md:flex sm: flex justify-center py-3 md:px-0 sm: px-4">
            <Image
              onClick={toggleMenu}
              className="w-[30px] telative"
              src={Menu}
              alt="Logo"
            />
          </div>
          {toggle ? (
            <div
              className={`${poppins.className} absolute top-24
              lg:hidden md:block sm: block gap-5 
              uppercase w-full h-screen bg-white`}
            >
              {navList.map(({ path, title }, index) => (
                <ul key={index} className=" leading-[150px] flex justify-center">
                  <li>
                    <Link href={path}>{title}</Link>
                  </li>
                </ul>
              ))}
              <div className="flex justify-center">
              <button className="uppercase bg-orange-300 px-2 py-1 rounded-sm shadow-sm hover:shadow-md shadow-black hover:shadow-black">
                Login
              </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
