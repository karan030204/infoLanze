import { createContext } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Certificate from "./Certificate";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PDF from "./Components/PDF";
import About_Us from "./Pages/About_Us";
import Activities from "./Pages/Activities";
import Committee from "./Pages/Committee";
import Contact from "./Pages/Contact";
import Expo from "./Pages/Expo";
import Facilities from "./Pages/Facilities";
import Form from "./Pages/Form";
import Home from "./Pages/Home";


export const Pdf_Context = createContext("dinner");

function App() {
  
  const [pdfData, setPdfData] = useState({
    name: "",
    certificate_number: "",
  });

  return (
    <>
      <Router>
        <Header />
        <Pdf_Context.Provider value={{ pdfData, setPdfData }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About_Us />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/expo" element={<Expo />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/form" element={<Form />} />
            <Route path="/pdf" element={<PDF />} />

            <Route path="*" element={<h1>Error page not found</h1>} />
          </Routes>
        </Pdf_Context.Provider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
