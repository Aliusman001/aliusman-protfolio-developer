import Lottie from "react-lottie";
import animationData from "../animation/working.json";
import animationData1 from "../animation/office.json";
import { motion } from "framer-motion";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationData1,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Header({ setShow }) {
  return (
    <div id="home" className=" dark:bg-gray-900  ">
      <div className="grid md:grid-cols-2 pt-10 grid-cols-1  justify-items-center md:h-[calc(100vh-4rem)] max-w-screen-xl mx-auto px-5 items-center gap-7">
        <div className="md:text-left text-center text-dark dark:text-white">
          <div className="grid grid-cols-[280px,1fr] md:grid-rows-2 grid-rows-[2fr,1fr,1fr] items-center mb-4">
            <h1 className="text-5xl font-mono row-start-2 row-end-3  font-medium tracking-tight md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:justify-self-start col-start-1 col-end-3 justify-self-center">
              Ali Usman
            </h1>
            <i className="row-start-3 row-end-4 col-span-2  inline-block dark:text-yellow-500 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3  justify-self-center">
              Web Application and React js developer
            </i>
            <div className=" md:row-span-2 md:col-start-2 md:col-end-3 md:justify-self-start row-span-1 col-span-2  justify-self-center">
              <Lottie
                isClickToPauseDisabled
                options={defaultOptions2}
                height={100}
                width={100}
              />
            </div>
          </div>

          <p className="max-w-screen-sm ">
            I'm a React js developer using JavaScript, Redux, Redux Toolkit,
            TailwindCSS, Material UI, HTML5, CSS, Node js with Express js for
            creating RESTful endpoints, Sequelize as an ORM and deploying
            applications on Netlify. Also has experience on MongoDB, Express,
            Node js. Looking to explore more on serverless, GraphQL, Next js and
            Remix js.
          </p>

          <button
            onClick={() => {
              setShow(true);
            }}
            type="button"
            className="text-white mt-5  py-4 bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-10  text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2"
          >
            <img src="cv.svg" className="w-4 h-4 mr-2" /> My Resume
          </button>
        </div>
        <motion.div
          whileHover={{ scale: 1, rotate: 5 }}
          whileTap={{ scale: 0.8, rotate: -5, borderRadius: "100%" }}
        >
          <div className="rounded-2xl  md:h-[400px] h-[350px] dark:border-[10px] dark:border-yellow-500 overflow-hidden">
            <Lottie isClickToPauseDisabled options={defaultOptions1} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
