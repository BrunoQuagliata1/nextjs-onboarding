import Logo from "./ui/logo";
import Image from "next/image";

const MobileNavbarFooter = () => {
  return (
    <footer className=" bottom-0 w-full px-5 py-2.5">
      <div className="w-24 ">
        <Logo type="primary" alt="ISO Logo" />
      </div>
      <div className="flex h-5 items-center justify-between ">
        <p className="text-xs leading-6 text-gray-custom">info@planit.com.uy</p>
        <p className="text-right text-xs leading-6 text-gray-custom">
          Tel: +598 96593615
        </p>
      </div>
      <hr className="my-2.5" />
      <div className="flex justify-between gap-5">
        <div className="text-xs leading-6 text-gray-custom">
          PlanIT, 2021 - All rights reserved
        </div>
        <div className="w-1.75 h-3.25 bg-gray-500"></div>
        <div className="flex flex-row gap-8 max-sm:gap-4">
          <div className="h-3 w-2 bg-[url('/footer/facebook.svg')]"></div>
          <div className="h-3 w-3 bg-[url('/footer/linkedin.svg')]"></div>
          <div className="h-3 w-3.5 bg-[url('/footer/twitter.svg')]"></div>
          <div className="h-[0.8rem] w-[0.8rem] bg-[url('/footer/instagram.svg')]"></div>
        </div>
      </div>
    </footer>
  );
};

const NavbarFooter = () => {
  return (
    <footer className="bottom-0 w-full px-5 py-2.5 max-sm:hidden">
      <hr className="my-2.5" />
      <div className="flex justify-between gap-5">
        <div className="text-lg leading-6 text-gray-custom">
          Copyright ©2024
        </div>
        <div className="flex items-center">
          <div className="mr-4 text-lg leading-6 text-gray-custom">
            Powered by
          </div>
          <Image
            src="/logos/logo-quaternary.svg"
            alt="Quaternary Logo"
            width={150}
            height={300}
          />
        </div>
        <div className="flex flex-row gap-8 max-sm:gap-4">
          <div className="h-3 w-2 bg-[url('/footer/facebook.svg')]"></div>
          <div className="h-3 w-3 bg-[url('/footer/linkedin.svg')]"></div>
          <div className="h-3 w-3.5 bg-[url('/footer/twitter.svg')]"></div>
          <div className="h-[0.8rem] w-[0.8rem] bg-[url('/footer/instagram.svg')]"></div>
        </div>
      </div>
    </footer>
  );
};

export { NavbarFooter, MobileNavbarFooter };
