import { motion } from "framer-motion";
import Border from "./usefullComponents/Border";
export default function Footer() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Border />
      <div className="max-w-screen-xl mx-auto ">
        <ul className="dark:text-white pt-5  flex justify-center  items-center gap-3">
          <li>
            <a
              href="https://www.linkedin.com/in/ali-usman-028770248/"
              target="_blank"
            >
              <img className="w-10 h-10 " src="/linkedin.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Aliusman001" target="_blank">
              <img className="w-9 h-9 " src="/github.svg" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=-ktdRu3zBEw"
              target="_blank"
            >
              <img className="w-11 h-11 " src="/youtube.svg" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=03024780522"
              target="_blank"
            >
              <img className="w-10 h-10 " src="/whatsapp.svg" alt="" />
            </a>
          </li>
        </ul>
        <i className="block text-center py-5 text-gray-900 dark:text-white">
          Copyright {new Date(Date.now()).getFullYear()}
        </i>
      </div>
    </div>
  );
}
