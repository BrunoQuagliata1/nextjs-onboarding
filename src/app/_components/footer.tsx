import Logo from "./ui/logo";

const MobileFooter = () => {
  return (
    <footer className="bottom-0 w-full px-5 py-2.5">
      <Logo type="primary" alt="ISO Logo" width={96} />
      <div className="flex h-5 items-center justify-between">
        <p className="text-xs leading-6 text-gray-custom">info@planit.com.uy</p>
        <p className="text-right text-xs leading-6 text-gray-custom">
          Tel: +598 96593615
        </p>
      </div>
      <hr className="my-2.5" />
      <div className="flex justify-between gap-5">
        <div className="text-xs text-gray-custom">
          PlanIT, 2021 - All rights reserved
        </div>
        <div className="flex flex-row gap-8 max-sm:gap-4">
          <div className="h-3 w-2 bg-[url('/footer/facebook.svg')]" />
          <div className="h-3 w-3 bg-[url('/footer/linkedin.svg')]" />
          <div className="h-3 w-3.5 bg-[url('/footer/twitter.svg')]" />
          <div className="h-[0.8rem] w-[0.8rem] bg-[url('/footer/instagram.svg')]" />
        </div>
      </div>
    </footer>
  );
};

const FooterSearchProduct = () => {
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
          <div className="relative -bottom-1">
            <Logo type="quaternary" alt="Quaternary Logo" width={120} />
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="h-3 w-3 bg-[url('/footer/linkedin.svg')]" />
          <div className="h-[0.8rem] w-[0.8rem] bg-[url('/footer/instagram.svg')]" />
        </div>
      </div>
    </footer>
  );
};

export { FooterSearchProduct, MobileFooter };
