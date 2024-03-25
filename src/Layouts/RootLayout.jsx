import Footer from "@/shared/Footer";
import dynamic from "next/dynamic";

const RootLayout = ({ children }) => {
  const Navbar = dynamic(() => import("@/shared/Navbar"),{ssr: false});
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
