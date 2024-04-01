import { Button } from "./ui/button";
import Logo from "./ui/logo";

const ChatBot = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mr-3">
        <Button variant="help">¿Necesitás ayuda?</Button>
      </div>
      <Logo type="iso" alt="ISO Logo" width={40} />
    </div>
  );
};

export default ChatBot;
