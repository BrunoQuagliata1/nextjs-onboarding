"use client";
import React from "react";
// import Image from "next/legacy/image";
import Logo from "./ui/logo";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="left-0 top-0 w-full">
      <div className="flex h-36 items-center justify-between px-8">
        <div className="w-20">
          <Link href="/">
            <Logo type="primary" alt="Primary Logo" />
          </Link>
        </div>
        <div className="directi flex-col">
          <div className="mb-4 hidden gap-10 md:flex">
            <a
              href="#"
              className="bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent"
            >
              Regalos
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent"
            >
              Catering
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent"
            >
              Merchandising
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent"
            >
              Eventos
            </a>
          </div>

          {/* Search bar */}
          <div className="relative">
            <input
              className="h-9 w-full rounded-full border border-gray-200 bg-gray-100 pl-4 pr-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Buscar"
            />
            {/* <SearchIcon className="absolute right-3 top-2.5 h-4 w-4 text-blue-600" /> */}
          </div>
        </div>
        {/* User Info */}
        <div className="flex items-center gap-6">
          {/* <BellIcon className="h-5 w-5 text-gray-600" /> */}
          <div className="flex items-center">
            {/* User Image */}
            <div className="h-11 w-11 rounded-full bg-gray-300">
              {/* <Image
                src="/"
                alt="User"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              /> */}
            </div>
            <div className="ml-2 flex flex-col">
              <span className="font-medium text-gray-800">Victoria López</span>
              <div className="flex items-center text-sm text-gray-500">
                HR Manager
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
