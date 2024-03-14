import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";

const Login = ({ setRegister }) => {
  return (
    <div>
      <SheetHeader className="mb-5">
        <SheetTitle className="text-xl">Login</SheetTitle>
        <SheetDescription>
          Hello there, haven’t we seen you before?
        </SheetDescription>
      </SheetHeader>
      <Input placeholder="User Name" className="mb-4" />
      <Input placeholder="Password" className="" />
      <div className="flex items-center justify-between mb-7">
        <div className="flex space-x-2">
          <Checkbox id="terms1" />
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>
        <Button variant="link" className="px-0">
          Forget password
        </Button>
      </div>
      <Button className="w-full py-6 bg-primary">Login</Button>
      <p className="my-5">
        I haven’t account?{" "}
        <Button
          onClick={() => setRegister("signUp")}
          variant="link"
          className="px-0 text-primary"
        >
          Sign up
        </Button>
      </p>
      <Button className="flex items-center gap-2 w-full py-6 bg-white shadow text-gray-500">
        <img src="/images/google.svg" alt="google" /> Sign with Google
      </Button>
    </div>
  );
};

export default Login;
