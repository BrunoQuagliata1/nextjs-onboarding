import React from "react";

const GiftCard = () => {
  return (
    <div className="relative flex h-[290px] w-[223px] flex-col items-start rounded-sm bg-white p-0">
      <div className="absolute left-0 top-0 h-[60.69%] w-full rounded-t-sm bg-gray-200 bg-[url('/img/flipa-box.svg')]"></div>
      <div className="left-5.38% right-5.5% absolute top-[65.52%] flex w-full flex-row items-center justify-between p-0">
        <h3 className="font-poppins text-lg font-medium leading-[108%] text-black">
          Mini Box Salada
        </h3>
        <div className=" bottom-4 right-0 flex items-center">
          <span className="bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text font-poppins text-sm font-normal text-transparent">
            4.95
          </span>
          <img src="/card/star.svg" className="h-3 w-3 text-blue-500" />
        </div>
      </div>
      <div className="left-5.38% right-5.38% absolute top-[75.17%] font-poppins text-lg font-normal leading-[108%] text-gray-500">
        Flipa
      </div>
      <div className="left-5.38% right-6.73% absolute top-[87.59%] bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text font-poppins text-lg font-medium leading-[108%] text-transparent">
        $495
      </div>
      <div className="top-7.21% absolute right-2 top-4 h-3 w-3.5 bg-[url('/card/favorite.svg')]"></div>
    </div>
  );
};

export default GiftCard;
