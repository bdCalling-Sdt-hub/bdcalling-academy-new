import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Subscribe = ({ title, description }) => {
  return (
    <div className="my-16 space-y-8 lg:space-y-0">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="lg:mx-56 lg:p-10">
        <div className="lg:flex items-center gap-2">
          <Input type="email" placeholder="Enter your email" />
          <Button className="flex items-center gap-1 bg-primary py-6 px-8 mt-4 lg:mt-0 group transition-all">
            <p className="text-md"> Subscribe</p>
            <Send
              size={20}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
