import { Button } from "./ui/button";
import Logo from "./ui/logo";

const ChatBot = () => {
  return (
    <div className="flex">
      <div className=" mr-3 flex items-center justify-center">
        <Button variant="help">¿Necesitás ayuda?</Button>
      </div>
      <div className=" flex items-center justify-center rounded-xl shadow-md">
        <Logo type="iso" alt="ISO Logo" width={14} />
      </div>
    </div>
  );
};

export default ChatBot;
