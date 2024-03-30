import Footer from "@/shared/Footer";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const RootLayout = ({ children }) => {
  const Navbar = dynamic(() => import("@/shared/Navbar"), { ssr: false });
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Navbar />
      {children}
      <Footer />

      {open && (
        <div className="fixed inset-0 z-50 bg-white/5 backdrop-blur-sm ">
          <div className="fixed left-[50%] top-[50%] z-50 w-full lg:w-[900px] translate-x-[-50%] translate-y-[-50%] ">
            <div onClick={() => setOpen(false)}>
              <Link href="/offer">
                <img
                  src="/images/offer.jpg"
                  className="w-full rounded"
                  alt=""
                  loading="lazy"
                />
              </Link>
            </div>
            <div
              className="absolute right-3 top-2 text-blue-500 text-2xl cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <X />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RootLayout;
