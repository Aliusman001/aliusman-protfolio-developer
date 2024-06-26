import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(
    function () {
      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [dark]
  );
  return (
    <>
      <nav className="sticky top-0 z-10 backdrop-blur-lg  dark:bg-gray-900  border-b-[1px] border-gray-300">
        <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/icon.svg" alt="" width={40} />
            <span className=" font-mono self-center text-2xl font-medium whitespace-nowrap dark:text-white">
              Ali Usman
            </span>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => {
              setShow((c) => !c);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                d="M1 1h15M1 7h15M1 13h15"
                className=" stroke-2"
              />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${show ? "" : "hidden"}`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:items-center">
              <li>
                <a
                  href="#home"
                  className={` block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Contact Us
                </a>
              </li>

              <li>
                <label className="inline-flex py-2 px-3 items-center  cursor-pointer">
                  <input
                    type="checkbox"
                    value={dark}
                    checked={dark}
                    onChange={() => {
                      setDark((c) => !c);
                      console.log(dark);
                    }}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-600"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Dark Mode
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
