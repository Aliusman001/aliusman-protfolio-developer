import Lottie from "react-lottie";
import animationData from "../animation/laptoBoy.json";
import { motion } from "framer-motion";
import Border from "./usefullComponents/Border";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function SubHeader() {
  return (
    <div className="pt-20">
      <Border />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div id="skills" className="bg-gray-50 pt-20 dark:bg-gray-900 ">
          <div
            className="text-center  mx-auto
          max-w-[50rem]"
          >
            <h1 className="text-center font-mono text-5xl text-gray-900 dark:text-yellow-500 tracking-tighter ">
              Skills
            </h1>
            <i className="mt-3 inline-block dark:text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi quae commodi molestias ab. Nobis hic odio alias
              excepturi neque! Corporis?
            </i>
          </div>

          <div className="grid md:grid-cols-[1fr,1fr] py-10 grid-cols-1 gap-20 max-w-screen-lg mx-auto items-center ">
            <div className="md:h-[400px] h-[250px]  justify-self-center">
              <Lottie isClickToPauseDisabled options={defaultOptions1} />
            </div>

            <div className=" justify-self-center  w-full  flex  flex-col  dark:text-white ">
              <Progress persentage="95%" label="HTML" />
              <Progress persentage="85%" label="CSS" />
              <Progress persentage="80%" label="Javascript" />
              <Progress persentage="80%" label="TailwindCSS" />
              <Progress persentage="75%" label="MaterialUI" />
              <Progress persentage="70%" label="Node JS" />
              <Progress persentage="70%" label="Express" />
              <Progress persentage="70%" label="MongoDB" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Progress({ persentage, label }) {
  return (
    <div className="grid grid-cols-[3fr,1fr] md:gap-2 gap-0 md:justify-items-start justify-items-center">
      <div className="w-full  bg-gray-300 rounded-full  h-5">
        <div
          className="bg-yellow-600 basis-4/5 text-xs font-medium text-yellow-100 text-center p-0.5 leading-none h-full  flex items-center justify-center rounded-full"
          style={{ width: persentage }}
        >
          {persentage}
        </div>
      </div>
      <i className="basis-1/5 dark:text-white text-gray-900">{label}</i>
    </div>
  );
}
