import React from 'react'
import { useContext } from 'react'
import { Pdf_Context } from '../App'
import { styles } from '../Certificate'
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    pdf,
  } from "@react-pdf/renderer";

const PDF = () => {

    const {pdfData} = useContext(Pdf_Context)

    const renderPdf = () => {
        return (
          <PDFViewer width="100%" height="627px">
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text style={styles.title}>Certificate of Achievement</Text>
                  <Text style={styles.content}>
                    This certificate is awarded to:
                  </Text>
                  <Text style={styles.content}>{pdfData.name}</Text>
                  <Text style={styles.content}>
                    Certificate Number: {pdfData.certificate_number}
                  </Text>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        );
      };


  return (
    <div>
        {renderPdf()}
    </div>
  )
}

export default PDF