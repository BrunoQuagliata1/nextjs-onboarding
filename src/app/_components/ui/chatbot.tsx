import React from "react";
import { Button } from "./button";
import Logo from "./logo";

const ChatBot = () => {
  return (
    <div className="relative min-h-screen">
      {" "}
      {/* This ensures that the absolutely positioned elements are positioned relative to the full screen */}
      {/* ChatBot Button with Background */}
      <div
        className="absolute left-[1095px] top-[881px] flex h-[77px] w-[320px] items-center justify-center"
        style={{
          background: "#0F58B7",
          borderRadius: "10px",
          boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Button className="relative flex h-full w-full items-center justify-center font-poppins text-[16px] font-normal leading-[108%] tracking-tighter text-white">
          <span className="absolute left-[34px] h-[10px] w-[10px] rounded-full bg-white"></span>
          ¿Necesitás ayuda?
        </Button>
      </div>
      {/* Logo inside a white rounded rectangle */}
      <div
        className="absolute left-[1338px] top-[881px] flex h-[77px] w-[77px] items-center justify-center rounded-[10px] bg-white"
        style={{ boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="h-[42.29px] w-[28.74px]">
          <Logo type="iso" alt="ISO Logo" />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
