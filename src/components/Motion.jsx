import { motion, useScroll } from "framer-motion";
export default function Motion() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="origin-left fixed top-0 left-0 right-0 h-[10px] bg-yellow-500 z-30"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
