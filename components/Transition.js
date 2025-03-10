// framer motion
import { motion } from "framer-motion";

// variants

const transitionVariants = {
  initail: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        variants={transitionVariants}
        initial="initail"
        animate="animate"
        exit={"exit"}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 right-full bottom-0 h-screen z-30 bg-[#2e2257]"
      ></motion.div>
      <motion.div
        variants={transitionVariants}
        initial="initail"
        animate="animate"
        exit={"exit"}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 right-full bottom-0 h-screen z-20 bg-[#3b2d71]"
      ></motion.div>
      <motion.div
        variants={transitionVariants}
        initial="initail"
        animate="animate"
        exit={"exit"}
        transition={{ delay: 0.6, duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 right-full bottom-0 h-screen z-10 bg-[#4b3792]"
      ></motion.div>
    </>
  );
};

export default Transition;
