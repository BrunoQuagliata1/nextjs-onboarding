import { Button } from "./ui/button";
import Logo from "./ui/logo";

const ChatBot = () => {
  return (
    <div className="flex">
      <div className=" mr-3 flex items-center justify-center">
        <Button variant="help">¿Necesitás ayuda?</Button>
      </div>
      <div className=" sh adow flex items-center justify-center rounded-xl shadow-md">
        <div className="w-14 ">
          <Logo type="iso" alt="ISO Logo" />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
