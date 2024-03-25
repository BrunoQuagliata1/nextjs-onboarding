import Logo from "./ui/logo";

export default function MobileNavbarFooter() {
  return (
    <footer className=" bottom-0 w-full px-5 py-2.5">
      <Logo type="primary" alt="ISO Logo" width={24} />
      <div className="flex h-5 items-center justify-between text-xs leading-6 text-gray-custom">
        <p>info@planit.com.uy</p>
        <p className="text-right">Tel: +598 96593615</p>
      </div>
      <hr className="my-2.5" />
      <div className="flex justify-between gap-5">
        <div className="text-xs leading-6 text-gray-custom">
          PlanIT, 2021 - All rights reserved
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
}
