import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollProgress from "../components/ScrollProgress";
import CustomCursor from "../components/CustomCursor";
import useSmoothScroll from "../hooks/useSmoothScroll";

const Main = () => {
  const { pathname } = useLocation();
  useSmoothScroll();

  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        {/* Cross-fades between routes. `mode="wait"` avoids two pages
            overlapping mid-transition. */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Main;
