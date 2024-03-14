import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SheetHeader, SheetTitle } from "../ui/sheet";

const Register = ({ setRegister }) => {
  return (
    <div>
      <SheetHeader className="mb-5">
        <SheetTitle className="text-xl">Register</SheetTitle>
        <p>
          I haven’t account?{" "}
          <Button
            onClick={() => setRegister("")}
            variant="link"
            className="px-0 text-primary"
          >
            Sign In
          </Button>
        </p>
      </SheetHeader>
      <Input placeholder="Full Name" className="mb-4" />
      <Input placeholder="Username" className="mb-4" />
      <Input placeholder="Email" className="mb-4" />
      <Input placeholder="Password" className="mb-4" />
      <Input placeholder="Confirm Password" className="mb-4" />

      <Button className="w-full py-6 bg-primary">Register</Button>

      <Button className="flex items-center gap-2 w-full py-6 bg-white shadow text-gray-500 mt-10">
        <img src="/images/google.svg" alt="google" /> Sign with Google
      </Button>
    </div>
  );
};

export default Register;
