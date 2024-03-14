import React from 'react';
import Image from 'next/image';

const logoPaths = {
  iso: '/logos/iso.svg',
  primary: '/logos/logo-primary.svg',
  secondary: '/logos/logo-secondary.svg',
};

type LogoProps = {
  type: keyof typeof logoPaths;
  alt: string;
};

const Logo: React.FC<LogoProps> = ({ type, alt }) => {
  const logoPath = logoPaths[type];
  return (
    <div className="logo-container">
      <Image src={logoPath} alt={alt} width={485} height={190} />
    </div>
  );
};

export default Logo;
