import Link from "next/link";
import { Button } from "../ui/button";

const JoinUs = () => {
  return (
    <div className="bg-primary lg:flex items-center justify-between lg:px-10  py-20 rounded-md  my-14 container">
      <h2 className="text-2xl lg:text-4xl text-white font-medium">
        Start Your Best Online/Offline
        <br /> Course with Us
      </h2>
      <Link href="/contact">
        <Button className="px-16 py-6 text-xl bg-white text-primary">
          Join Us
        </Button>
      </Link>
    </div>
  );
};

export default JoinUs;
