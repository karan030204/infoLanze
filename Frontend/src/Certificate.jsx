import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  pdf,
} from "@react-pdf/renderer";
import { useContext } from "react";
import { Pdf_Context } from "./App";

// Styles for the PDF document
export const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
});

// Certificate component
const Certificate = () => {
  const { pdfData, setPdfData } = useContext(Pdf_Context);


  const [pdfVisible, setPdfVisible] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setPdfVisible(true);
    window.location.href = "/pdf"
  };

  // Function to render the PDF
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Certificate Number:
          <input
            type="text"
            value={pdfData.certificate_number}
            onChange={(e) =>
              setPdfData({ ...pdfData, certificate_number: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            value={pdfData.name}
            onChange={(e) => setPdfData({ ...pdfData, name: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Generate Certificate</button>
      </form>

    </div>
  );
};

export default Certificate;
