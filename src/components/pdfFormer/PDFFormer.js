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
  const { articleId, title, subText, category, region, content } = props


  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.text}>
          {`${content}`}
        </Text>
      </Page>
    </Document>
  )
}

export default PDFFormer
