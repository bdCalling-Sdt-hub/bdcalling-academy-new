import AuthProvider from "@/contexts/AuthContext";
import "@/styles/globals.css";
import "animate.css";
import { AnimatePresence, motion } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";
import NextNProgress from "nextjs-progressbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <AuthProvider>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.2 }}
            className={poppins.className}
          >
            <NextNProgress color="#1796FD" />
            {getLayout(<Component {...pageProps} />)}
          </motion.div>
        </AnimatePresence>
      </AuthProvider>
    </SessionProvider>
  );
}
