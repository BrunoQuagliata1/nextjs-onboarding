"use client";
import Link from "next/link";
import React from "react";

import Logo from "./ui/logo";
import MenuIcon from "./ui/menu";

const NavBar = () => {
  return (
    <div className="w-full">
      <div className="flex h-36 items-center justify-between px-8">
        <Link href="/">
          <Logo type="primary" alt="Primary Logo" width={96} />
        </Link>
        <div className="flex-col">
          <div className="mb-4 hidden gap-10 text-transparent md:flex">
            <a href="#" className="bg-custom-gradient bg-clip-text">
              Regalos
            </a>
            <a href="#" className="bg-custom-gradient bg-clip-text">
              Catering
            </a>
            <a href="#" className="bg-custom-gradient bg-clip-text">
              Merchandising
            </a>
            <a href="#" className="bg-custom-gradient bg-clip-text">
              Eventos
            </a>
          </div>
          <input
            className="h-9 w-full rounded-full border border-gray-200 bg-gray-100 pl-4 pr-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Buscar"
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="h-11 w-11 rounded-full bg-gray-300" />
          <div className="ml-2 flex flex-col">
            <p className="font-medium text-gray-800">Victoria López</p>
            <p className="flex items-center text-sm text-gray-500">
              HR Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface NavBarProps {
  variant: "search" | "default";
}

const MobileNavbar = React.forwardRef<HTMLButtonElement, NavBarProps>(
  ({ variant, ..._props }, _) => {
    if (variant === "search") {
      return (
        <div className="flex w-full flex-col rounded-lg shadow-lg">
          <div className="mx-5 mt-6 flex items-center justify-between">
            <Logo type="primary" alt="Primary Logo" width={96} />
            <MenuIcon color="black" />
          </div>
          <div className="relative mx-5 my-6">
            <input
              className="h-9 w-full rounded-full border border-gray-200 bg-gray-100 pl-4 pr-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Buscar"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full">
        <div className="absolute -left-1 -top-7  z-[-1] h-[32rem] w-full overflow-x-hidden">
          <div className="absolute -top-60 left-6 h-[24rem] w-full rotate-[10.82deg] transform rounded-[40px] bg-gradient-to-br from-[#0F58B7] to-[#62D9FF]"></div>
        </div>
        <div className="mx-5 mt-6 flex items-center justify-between">
          <Logo type="secondary" alt="Secondary Logo" width={96} />
          <MenuIcon color="white" />
        </div>
      </div>
    );
  },
);

MobileNavbar.displayName = "MobileNavbar";

export { MobileNavbar, NavBar };
