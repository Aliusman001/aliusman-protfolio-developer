import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Pdf from "./components/Pdf";
import { useState } from "react";
import Motion from "./components/Motion";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Motion />
      <Navbar />
      <Header setShow={setShow} />
      <Pdf setShow={setShow} show={show} />
      <SubHeader />
      <Form />
      <Footer />
    </>
  );
}

export default App;
