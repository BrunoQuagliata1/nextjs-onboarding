import React from "react";
import Image from "next/legacy/image";

const logoPaths = {
  iso: "/logos/iso.svg",
  primary: "/logos/logo-primary.svg",
  secondary: "/logos/logo-secondary.svg",
};

type LogoProps = {
  type: keyof typeof logoPaths;
  alt: string;
  width?: number;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
};

const Logo: React.FC<LogoProps> = ({ type, alt, width = "14" }) => {
  const logoPath = logoPaths[type];
  return (
    <div className={`logo-container w-${width}`}>
      <Image src={logoPath} priority alt={alt} width={485} height={190} />
    </div>
  );
};

export default Logo;
