import Lottie from "react-lottie";
import animationData from "../animation/websiteAndGirlAnimation.json";
import { motion } from "framer-motion";
import Border from "./usefullComponents/Border";
import sendMessage from "../api/sendMessage";
import { useState } from "react";
import Toast from "./usefullComponents/Toast";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await sendMessage({ email, message });
      setResponse(response);
    } catch (error) {
      setResponse({ status: "fail", data: { message: error.message } });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Border />

      <div id="contact" className="py-20 dark:bg-gray-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0 },
            hidden: { opacity: 0, scale: 0, y: -25 },
          }}
        >
          <div
            className="text-center  mx-auto
       max-w-[50rem]"
          >
            <h1 className="text-center font-mono text-5xl text-gray-900 dark:text-yellow-500 tracking-tighter ">
              Contact Us
            </h1>
            <i className="mt-3 inline-block dark:text-white">
              I'm a React js developer using JavaScript, Redux, Redux Toolkit,
              TailwindCSS, Material UI, HTML5, CSS, Node js with Express js for
              creating RESTful endpoints.
            </i>
          </div>
        </motion.div>
        <div className=" justify-items-center items-center grid-cols-1 grid md:grid-cols-[2fr,1fr] max-w-screen-lg mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-3/4"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -115 },
            }}
          >
            <form className="w-full" onSubmit={handleSubmit}>
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  id="website-admin"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  placeholder="youremail@gmail.com"
                />
              </div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium mt-5 text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                id="message"
                rows="4"
                required
                className="block p-2.5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className=" disabled:cursor-not-allowed text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-100 dark:focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5 w-full"
              >
                {loading ? "Loading..." : "Message us"}
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 115 },
            }}
          >
            <div className="md:col-start-2 md:col-end-3 row-start-1 row-end-1 md:h-full h-[250px] ">
              <Lottie isClickToPauseDisabled options={defaultOptions1} />
            </div>
          </motion.div>
        </div>
      </div>

      <Toast response={response} setResponse={setResponse} />
    </>
  );
}
