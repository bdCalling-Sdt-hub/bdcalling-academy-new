import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { imgUrl } from "@/config";
import { motion } from "framer-motion";
import { AlignRight, ChevronDown, LogOut, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const DynamicAuthHomepage = dynamic(() => import("@/components/Auth/index"), {
    ssr: false,
  });
  const router = useRouter();
  const path = usePathname();
  const { data: session } = useSession();

  const logout = () => {
    signOut();
  };

  const items = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Courses",
      path: "/courses/offline",
      children: [
        {
          title: "Offline Courses",
          path: "/offline",
        },
        {
          title: "Online Courses",
          path: "/online",
        },
        // {
        //   title: "Video Courses",
        //   path: "/video",
        // },
      ],
    },
    {
      title: "Success Stories",
      path: "/success-stories",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const srcUrl = session?.user?.image
    ? `${imgUrl}/${session?.user?.image}`
    : "/images/profile.png";

  return (
    <div className="bg-[#e6f8ff] sticky top-0 z-50 py-4">
      <nav className="container lg:flex items-center w-full justify-between ">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img className="w-24 md:w-40" src="/images/logo.png" alt="logo" />
          </Link>
          <motion.div
            whileTap={{ scale: 1.2, transition: { duration: 0.5 } }}
            className="lg:hidden cursor-pointer text-white active:duration-300"
            onClick={() => setOpen(!open)}
          >
            {!open ? <AlignRight color="#1796fd" /> : <X color="#1796fd" />}
          </motion.div>
        </div>

        <ul
          className={`space-y-5 lg:space-y-0 lg:flex gap-10  items-center bg-[#e6f8ff] lg:bg-transparent p-4 lg:p-0  absolute lg:static  h-auto ${
            open ? "left-0 top-14 w-full" : "left-0 -top-96"
          }`}
        >
          {items.map((item, index) => (
            <li key={index}>
              <Link
                className={`${
                  item.path === path ? "text-primary font-bold" : "text-black"
                } text-[17px] hover:text-primary duration-200`}
                href={item.path}
              >
                {item.title !== "Courses" ? (
                  item.title
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center">
                      Courses <ChevronDown size={20} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.children.map((item, index) => (
                        <DropdownMenuItem key={index}>
                          <Link href={`/courses${item.path}`}>
                            {item.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </Link>
            </li>
          ))}

          {session?.user?.email ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="bg-white rounded-full w-11 h-11 flex items-center justify-center">
                  <img
                    src={srcUrl}
                    className="w-full h-full border border-primary rounded-full"
                    alt=""
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-center">
                <DropdownMenuLabel className="text-sm">
                  {session?.user?.name}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={logout}
                  className="flex items-center gap-2 font-normal"
                >
                  <LogOut size={20} />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              className="bg-[#1796fd]"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
          )}

          {/* <DynamicAuthHomepage /> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
