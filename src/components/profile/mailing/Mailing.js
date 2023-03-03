import React, { useEffect, useRef, useState } from 'react'
import '../mailing/Mailing.scss'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector } from 'react-redux'

import * as FormData from 'form-data'

function Mailing() {
  const state = useSelector((state) => state)
  const language = state.changeLanguage.lang
  const user = state.user
  // ==================================================

  const [bcc, setBcc] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [files, setFiles] = useState([])

  const Button = styled.button``
  // --------------------------------------------------

  const transFilesToArr = () => {
    return Object.keys(files).map((el) => files[el])
  }

  const formAllData = () => {
    let formData = new FormData()
    bcc
      .replace(' ')
      .split(',')
      .forEach((el) => formData.append('Bcc[]', el))

    formData.append('Subject', subject)
    formData.append('Body', body)
    transFilesToArr().forEach((el) => formData.append('Attachments', el))

    return formData
  }

  const clearInputs = () => {
    setBcc('success changes!🔥')
    setSubject('')
    setBody('')
  }

  const checkIsCorrectInputs = () => {
    return (
      bcc.length > 5 && subject !== '' && body !== '' &&
      transFilesToArr().length > 0
    )
  }

  const clickSend = () => {
    if (checkIsCorrectInputs()) {
      const url = `${state.startSettings.confirmDomain}/api/Email/SendEmails`

      const objSubmit = {
        Bcc: ['denysmuzyka04@gmail.com'],
        Subject: 'dick',
        Body: 'some',
        Attachments: [`${files[0]}`],
      }

      axios
        .post(url, formAllData(), {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (res.status === 200) {
            clearInputs()
          }
        })
        .catch((e) => {
          console.log('error: send mail as admin', e)
        })
    }
  }

  return (
    <div className="Mailing_Section">
      <div className="Mailing_Wrap">
        <div className="Mail_Wrap">
          <div className="to">
            <div className="toText">
              <span>To</span>
            </div>
            <form>
              <input
                value={bcc}
                onChange={(el) => setBcc(el.target.value)}
                type="text"
                placeholder="Bcc"
                className="inputBcc"
              />
            </form>
          </div>
          <div className="Subject">
            <div className="subjectText">
              <span>Subject</span>
            </div>
            <div>
              <input
                value={subject}
                onChange={(el) => setSubject(el.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="bodyWrap">
            <div className="Body">
              <div className="bodyText">
                <span>Body</span>
              </div>
              <div>
                <textarea
                  value={body}
                  onChange={(el) => setBody(el.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="Attachments">
              <div className="attachmentsText">
                <span>Add attachments</span>
              </div>
              <div className="attachments">
                <div className="but">
                  <div className="fake">+</div>
                  <input
                    onChange={(e) => setFiles(e.target.files)}
                    className="but_input"
                    type={'file'}
                    placeholder="+"
                    multiple
                  />
                </div>
              </div>
              <div className="button">
                <Button onClick={clickSend}>Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mailing
