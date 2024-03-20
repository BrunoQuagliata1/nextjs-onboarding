import React from "react";

const MenuIcon = () => {
  return (
    <div
      className="flex cursor-pointer flex-col gap-3"
      onClick={() => console.log("clicked")}
    >
      <div className="h-0 w-10 border-t-2 border-white"></div>
      <div className="h-0 w-10 border-t-2 border-white"></div>
      <div className="h-0 w-10 border-t-2 border-white"></div>
    </div>
  );
};

export default MenuIcon;
