import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import next from "/next.svg";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import previous from "/previous.svg";
import close from "/close.svg";
import { useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Pdf({ show, setShow }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages._pdfInfo.numPages);
  }
  useEffect(
    function () {
      document.body.classList.add("overflow-hidden");
      if (!show) {
        document.body.classList.remove("overflow-hidden");
      }
    },
    [show]
  );

  return (
    <div
      className={`${
        show ? "" : "!hidden"
      }   w-full h-full md:flex md:justify-center  fixed bg-gray-900 top-0 bottom-0 z-10  overflow-scroll md:overflow-x-hidden`}
    >
      <div className="w-fit h-fit">
        <Document
          className="relative group w-fit"
          file="/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            className="border-2 border-yellow-500"
            pageNumber={pageNumber}
          />
          <Buttons
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            numPages={numPages}
          />
        </Document>
      </div>

      <img
        onClick={() => {
          setShow((c) => !c);
        }}
        className="w-10 h-10  cursor-pointer z-10 text-white  fixed right-10  top-5"
        src={close}
      />
    </div>
  );
}
function Buttons({ pageNumber, setPageNumber, numPages }) {
  return (
    <div className="group-hover:visible invisible absolute  bottom-5 flex w-[15rem] z-10 left-1/2 -translate-x-1/2 shadow-sm shadow-yellow-500 p-5 justify-between items-center">
      <Button
        handel={() => {
          if (pageNumber > 1) {
            setPageNumber((c) => c - 1);
          }
        }}
        icon={previous}
      />
      <p className="text-sm">
        Page {pageNumber} of {numPages}
      </p>
      <Button
        handel={() => {
          if (pageNumber < numPages) {
            setPageNumber((c) => c + 1);
          }
        }}
        icon={next}
      />
    </div>
  );
}
function Button({ handel, icon, customeClass = "" }) {
  return (
    <button
      onClick={handel}
      type="button"
      className={` ${customeClass} text-yellow-600 border border-yellow-600 hover:bg-yellow-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:focus:ring-yellow-800 dark:hover:bg-yellow-500`}
    >
      <img src={icon} className="w-4 h-4  " />
    </button>
  );
}
