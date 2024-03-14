import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Button } from "../ui/button";
import Login from "./Login";
import Register from "./Register";

const AuthHomepage = () => {
  const [register, setRegister] = useState("");

  return (
    <Sheet>
      <SheetTrigger>
        <Button className="bg-[#1796fd]">Login</Button>
      </SheetTrigger>
      <SheetContent>
        {register !== "signUp" ? (
          <Login setRegister={setRegister} />
        ) : (
          <Register setRegister={setRegister} />
        )}
      </SheetContent>
    </Sheet>
  );
};

export default AuthHomepage;
