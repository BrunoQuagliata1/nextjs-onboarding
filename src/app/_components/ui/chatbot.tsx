import React from 'react';
import { Button } from './button';
import Logo from './logo';


const ChatBot = () => {
  return (
    <div className="relative min-h-screen"> {/* This ensures that the absolutely positioned elements are positioned relative to the full screen */}
      {/* ChatBot Button with Background */}
      <div className="absolute left-[1095px] top-[881px] w-[320px] h-[77px] flex items-center justify-center" style={{background: '#0F58B7', borderRadius: '10px', boxShadow: '5px 5px 30px rgba(0, 0, 0, 0.1)'}}>
        <Button className="relative flex items-center justify-center w-full h-full text-white font-poppins font-normal text-[16px] leading-[108%] tracking-tighter">
          <span className="absolute left-[34px] w-[10px] h-[10px] bg-white rounded-full"></span>
          ¿Necesitás ayuda?
        </Button>
      </div>

      {/* Logo inside a white rounded rectangle */}
      <div className="absolute left-[1338px] top-[881px] w-[77px] h-[77px] bg-white rounded-[10px] flex items-center justify-center" style={{boxShadow: '5px 5px 30px rgba(0, 0, 0, 0.1)'}}>
        <div className="w-[28.74px] h-[42.29px]">
          <Logo type="iso" alt="ISO Logo" />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
