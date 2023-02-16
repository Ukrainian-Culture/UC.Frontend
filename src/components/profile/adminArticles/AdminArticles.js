import React from 'react'
import '../adminArticles/adminArticles.scss'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useState } from 'react'
import { json } from 'react-router-dom'
function AdminArticles() {
  const Button = styled.button``

  const state = useSelector((state) => state)

  // current language
  const language = state.changeLanguage.lang

  const user = state.user
  const fetchArticle = state.fetchArticle
  const domain = state.startSettings.domain
  const culture = state.culture
  //=======================================

  const [articleId, setArticleId] = useState('')
  const initialCurrentArticle = {
    articleId: '',
    content: '',
    shortDescription: '',
    subText: '',
    title: '',
  }
  const [currentArticle, setCurrentArticle] = useState(initialCurrentArticle)
  const [textAreaArticle, setTextAreaArticle] = useState(initialCurrentArticle)

  const [isChanges, setIsChanges] = useState(false)
  //---------------------------------------

  // check if admin make changes in textareas
  useEffect(() => {
    const str_1 = JSON.stringify(currentArticle)
    const str_2 = JSON.stringify(textAreaArticle)

    setIsChanges(!(str_1 === str_2))
  }, [textAreaArticle])

  ///////////////////////////////////////////////////////////////////////////////////

  // function which put changes of article
  const PutChangesToArticle = async () => {
    const loc_lang = `${state.culture.data[language]['id']}`
    const url = `${state.startSettings.domain}/api/${loc_lang}/ArticlesLocale/${articleId}`

    const result = await fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(textAreaArticle),
    })

    if(result.ok){
      setCurrentArticle(initialCurrentArticle)
      setTextAreaArticle(initialCurrentArticle)
      setArticleId("success changes!🔥")
    }
  }

  const GetArticle = () => {
    if (!culture.loading) {
      const loc_lang = `${state.culture.data[language]['id']}`
      const urlArticle = `${domain}/api/${loc_lang}/ArticlesLocale/${articleId}`

      axios
        .get(urlArticle)
        .then((responce) => {
          setCurrentArticle(responce.data)
          setTextAreaArticle(responce.data)
          // console.log(responce)
        })
        .catch((e) => {
          console.log('error getArticle: ', e)
        })
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="AdminArticles_Section">
      <div className="AdminArticles_Wrap">
        <div className="AdminArticles_Section_articleIdWrap">
          <div className="articleIdWrap">
            <div className="articleIdText">
              <span>article id</span>
            </div>

            <div className="articleId">
              <div>
                <input
                  onChange={(e) => setArticleId(e.target.value)}
                  value={articleId}
                  type="text"
                />
              </div>

              <div>
                <Button onClick={GetArticle}>search</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mainWrap">
          <div className="leftWrap">
            <div className="tittleWrap">
              <div className="tittleText">
                <span>tittle</span>
              </div>
              <textarea
                onChange={(e) =>
                  setTextAreaArticle({
                    ...textAreaArticle,
                    title: e.target.value,
                  })
                }
                value={textAreaArticle.title}
                className="tittleArea"
              ></textarea>
            </div>

            <div className="shortDescriptionWrap">
              <div className="shortDescriptionText">
                <span>shortDescription</span>
              </div>
              <textarea
                onChange={(e) =>
                  setTextAreaArticle({
                    ...textAreaArticle,
                    shortDescription: e.target.value,
                  })
                }
                value={textAreaArticle.shortDescription}
                className="shortDescriptionArea"
              ></textarea>
            </div>
          </div>

          <div className="subtextWrap">
            <div className="subtextText">
              <span>subText</span>
            </div>
            <textarea
              onChange={(e) =>
                setTextAreaArticle({
                  ...textAreaArticle,
                  subText: e.target.value,
                })
              }
              value={textAreaArticle.subText}
              className="subtextArea"
            ></textarea>
          </div>
        </div>

        <div className="contentWrap">
          <div className="contentText">
            <span>content</span>
          </div>
          <textarea
            onChange={(e) =>
              setTextAreaArticle({
                ...textAreaArticle,
                content: e.target.value,
              })
            }
            value={textAreaArticle.content}
            className="contentArea"
          ></textarea>

          {isChanges ? (
            <div className="submitWrap">
              <button
                onClick={PutChangesToArticle}
                className="submitWrap_button"
              >
                submit
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default AdminArticles
