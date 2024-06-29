"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const animation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "-100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const Transition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="hidden xl:flex xl:h-screen xl:w-screen fixed top-0 left-0 right-0 pointer-events-none z-50">
            <motion.div
              variants={animation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.1,
              }}
              className="w-full h-full bg-[#e2cfbd] relative"
            ></motion.div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Transition;
