import { motion } from "framer-motion";
export default function Border() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 2 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: {
          opacity: 0,

          x: -150,
        },
      }}
    >
      <div className="dark:border-t-[1px] dark:border-yellow-500 w-1/2 mx-auto"></div>
    </motion.div>
  );
}
