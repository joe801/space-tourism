"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/starter-code/assets/shared/logo.svg";
import hamburger from "../../public/starter-code/assets/shared/icon-hamburger.svg";
import close from "../../public/starter-code/assets/shared/icon-close.svg";
import { menuItems } from "../utils/utils";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [showMenu, setShowmenu] = useState<boolean>(false);
  const updateShowMenu = () => {
    setShowmenu(!showMenu);
  };

  return (
    <nav className="relative w-full pt-8 md:pt-0 lg:pt-8 pl-6 lg:pl-12 bg-transparent text-white font-barlow flex justify-between items-start md:items-center ">
      <Image src={logo} alt="logo" />
      <div
        className={`${
          showMenu
            ? "flex justify-between items-start"
            : " hidden md:flex items-center"
        } md:items-center`}
      >
        <div className="hidden xl:inline-block h-[1px] w-[473px] bg-white opacity-25 -mr-6 z-10"></div>
        <div
          className={`flex bg-[#FFFFFF01] backdrop-blur-2xl md:pl-12 lg:pl-20 md:w-[420px] lg:w-[700px] md:gap-6 ${
            showMenu
              ? "flex-col md:flex-row gap-4 pl-12 pt-32 md:pt-0 absolute md:relative right-0 top-0 w-8/12 h-screen md:h-fit"
              : " flex-row"
          }`}
        >
          {menuItems.map((item) => (
            <Link
              href={item.link}
              key={item.no}
              className={`md:py-6 ${
                pathname === item.route ? "md:border-b-2" : ""
              }`}
            >
              <span className="font-bold mr-2 md:hidden lg:inline-block">
                {item.no}
              </span>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div
        className=" block absolute top-10 right-6 md:hidden z-20"
        onClick={updateShowMenu}
      >
        {!showMenu ? (
          <Image src={hamburger} alt="hamburger icon" />
        ) : (
          <Image src={close} alt="close" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
