"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";

interface GiftCardProps {
  name: string;
  description?: string;
  calification?: string;
  personalize?: string[] | string;
  price: number;
  restaurant?: string;
  imageUrl?: string;
}

const GiftCard: React.FC<GiftCardProps> = ({
  name,
  calification,
  price,
  restaurant,
}) => {
  return (
    <Link href={`/search/${name}`} className="w-full">
      <div className="flex aspect-square flex-col gap-2 overflow-hidden rounded-lg shadow-lg">
        <div className="h-full w-full">
          <div className="relative aspect-square h-[60%] w-full">
            <div className="absolute right-2 top-2 z-10 h-3 w-3.5 bg-[url('/card/favorite.svg')] bg-cover bg-center bg-no-repeat" />
            <div className="absolute left-0 top-0 h-full w-full rounded-t-lg bg-[url('/img/flipa-box.svg')] bg-cover bg-center" />
          </div>

          <div className="p-2">
            <div className="flex w-full flex-row items-center justify-between ">
              <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-medium text-black max-sm:text-sm">
                {name}
              </h3>
              <div className="flex items-center gap-1 max-sm:hidden">
                <span className="bg-custom-gradient bg-clip-text text-sm text-transparent ">
                  {calification}
                </span>
                <Image src="/card/star.svg" height={12} width={12} alt={""} />
              </div>
            </div>
            <div className="overflow-ellipsis whitespace-nowrap text-lg text-gray-500 max-sm:hidden">
              {restaurant}
            </div>
            <div className="bg-custom-gradient bg-clip-text text-lg text-transparent max-sm:text-sm">
              ${price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GiftCard;
