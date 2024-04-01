import Image from "next/legacy/image";
import React from "react";

const logoPaths = {
  iso: "/logos/iso.svg",
  primary: "/logos/logo-primary.svg",

  secondary: "/logos/logo-secondary.svg",
  tertiary: "/logos/logo-tertiary.svg",
  quaternary: "/logos/logo-quaternary.svg",
};

type LogoType = keyof typeof logoPaths;

const aspectRatios: Record<LogoType, number> = {
  iso: 65 / 44,
  primary: 65 / 195,
  secondary: 65 / 195,
  tertiary: 19 / 112,
  quaternary: 19 / 112,
};

type LogoProps = {
  type: keyof typeof logoPaths;
  alt: string;
  width?: number;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
};

const Logo: React.FC<LogoProps> = ({ type, alt, width = 485 }) => {
  const logoPath = logoPaths[type];

  const getHeight = (aspectRatio: number, width: number) => {
    return aspectRatio * width;
  };

  const height = getHeight(aspectRatios[type], width);

  return (
    <Image src={logoPath} priority alt={alt} width={width} height={height} />
  );
};

export default Logo;
