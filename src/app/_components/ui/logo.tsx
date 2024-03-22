import React from "react";
import Image from "next/legacy/image";

const logoPaths = {
  iso: "/logos/iso.svg",
  primary: "/logos/logo-primary.svg",
  secondary: "/logos/logo-secondary.svg",
  tertiary: "/logos/logo-tertiary.svg",
};

type LogoProps = {
  type: keyof typeof logoPaths;
  alt: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>; // Adding onClick prop
};

const Logo: React.FC<LogoProps> = ({ type, alt }) => {
  const logoPath = logoPaths[type];
  return (
    <div className="logo-container">
      <Image src={logoPath} priority alt={alt} width={485} height={190} />
    </div>
  );
};

export default Logo;
