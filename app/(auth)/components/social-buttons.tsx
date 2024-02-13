import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialButtons = () => {
  return (
    <div className="my-2 flex items-center justify-center w-full space-x-6">
      <Button variant="outline" className="w-2/5">
        <FcGoogle className="w-8 h-8" />
      </Button>
      <Button variant="outline" className="w-2/5">
        <FaGithub className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default SocialButtons;
