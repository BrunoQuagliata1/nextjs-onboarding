import Image from "next/image";

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
          <Image src="/footer/facebook.svg" width={6} height={8} alt={""} />
          <Image src="/footer/linkedin.svg" width={12} height={12} alt={""} />
          <Image src="/footer/twitter.svg" width={12} height={14} alt={""} />
          <Image
            src="/footer/instagram.svg"
            width={12.8}
            height={12.8}
            alt={""}
          />
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
          <div className="mr-4 flex flex-row gap-2 text-lg leading-6 text-gray-custom">
            Powered by
            <Logo type="quaternary" alt="Quaternary Logo" width={120} />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <Image src="/footer/linkedin.svg" width={12} height={12} alt={""} />
          <Image
            src="/footer/instagram.svg"
            width={12.8}
            height={12.8}
            alt={""}
          />
        </div>
      </div>
    </footer>
  );
};

export { FooterSearchProduct, MobileFooter };
