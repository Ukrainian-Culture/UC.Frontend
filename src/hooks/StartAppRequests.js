import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_CATEGORY_LOCALE_ERROR, FETCH_CATEGORY_LOCALE_SUCCESS } from '../redux-store/fetchCategoryLocale/fetchCategoryLocaleConst'
import { FETCH_CULTURE_ERROR, FETCH_CULTURE_SUCCESS } from '../redux-store/fetchCulture/fetchCultureConst'

function StartAppRequests() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  useEffect(() => {
    axios
      .get(`${state.startSettings.domain}/api/Culture/ids`)
      .then((response) => {
       
        // fetching languages guID
        dispatch({ type: FETCH_CULTURE_SUCCESS, payload: response.data })
        return response
      })
      .then((response) => {
        axios
          .get(
            `${state.startSettings.domain}/api/${response.data['en']}/CategoryLocale`,
          )
          .then((response_2) => {
            // console.log(response_2)
            dispatch({ type: FETCH_CATEGORY_LOCALE_SUCCESS, payload: response_2.data })
          })
          .catch(() => {dispatch({ type: FETCH_CATEGORY_LOCALE_ERROR})})
      })
      .catch(() => {
        dispatch({ type: FETCH_CULTURE_ERROR})
        dispatch({ type: FETCH_CATEGORY_LOCALE_ERROR})
      })
  }, [])
}

export default StartAppRequests
