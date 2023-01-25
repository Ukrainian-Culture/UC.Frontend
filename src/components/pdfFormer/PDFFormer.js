import React from 'react'
import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer'
import '../pdfFormer/pdfFormer.scss'

const styles = StyleSheet.create({
    page:{

        paddingHorizontal: 30,
    },
    text:{
        fontSize: 10
    },
})

function PDFFormer(props) {
  const { data } = props


  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.text}>
          {`${data.shortDesc} `.repeat(100)}
        </Text>
      </Page>
    </Document>
  )
}

export default PDFFormer
