import axios from 'axios'
import React, { useEffect } from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  FETCH_CATEGORY_LOCALE_ERROR,
  FETCH_CATEGORY_LOCALE_SUCCESS,
} from '../redux-store/fetchCategoryLocale/fetchCategoryLocaleConst'
import {
  FETCH_CULTURE_ERROR,
  FETCH_CULTURE_SUCCESS,
} from '../redux-store/fetchCulture/fetchCultureConst'
import {
  FETCH_STATISTIC_ERROR,
  FETCH_STATISTIC_SUCCESS,
} from '../redux-store/fetchStatistic/fetchStatisticConst'

function StartAppRequests() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const culture = state.culture
  const categoryLocale = state.categoryLocale

  const startHookCallback = useCallback(() => {
    // fetching categories names
    function axiosCategoryLocale(response) {
      axios
        .get(
          `${state.startSettings.domain}/api/${response.data['en']}/CategoryLocale`,
        )
        .then((response_2) => {
          // console.log(response_2)
          dispatch({
            type: FETCH_CATEGORY_LOCALE_SUCCESS,
            payload: response_2.data,
          })
        })
        .catch(() => {
          dispatch({ type: FETCH_CATEGORY_LOCALE_ERROR })
        })
    }

    // fetching data for staticstic section
    function axiosStatistic() {
      const getUktainePopulation = axios.get(
        `${state.startSettings.domain}/GetUkranePopulation`,
      )
      const getAmountOfUnescoHeritage = axios.get(
        `${state.startSettings.domain}/GetAmountOfUnescoHeritage`,
      )
      const getPopulationOfRegions = axios.get(
        `${state.startSettings.domain}/GetPopulationOfRegions`,
      )
      const getAmountOfMonuments = axios.get(
        `${state.startSettings.domain}/GetAmountOfMonuments`,
      )

      axios
        .all([
          getUktainePopulation,
          getAmountOfUnescoHeritage,
          getPopulationOfRegions,
          getAmountOfMonuments,
        ])
        .then(
          axios.spread((...allData) => {
            const recievedData = {
              uktainePopulation: allData[0].data,
              unescoHeritage: allData[1].data,
              populationOfRegions: allData[2].data,
              monuments: allData[3].data,
            }

            dispatch({ type: FETCH_STATISTIC_SUCCESS, payload: recievedData })
          }),
        )
        .catch(() => {
          dispatch({ type: FETCH_STATISTIC_ERROR })
        })
    }

    // fetching languages
    axios
      .get(`${state.startSettings.domain}/api/Culture/ids`)
      .then((response) => {
        // fetching languages guID
        dispatch({ type: FETCH_CULTURE_SUCCESS, payload: response.data })
        return response
      })
      .then((response) => {
        axiosCategoryLocale(response)
        axiosStatistic()
      })
      .catch(() => {
        dispatch({ type: FETCH_CULTURE_ERROR })
        dispatch({ type: FETCH_CATEGORY_LOCALE_ERROR })
        dispatch({ type: FETCH_STATISTIC_ERROR })
      })
  })

  useEffect(() => {
    // console.log(Object.keys(categoryLocale).length )
    if(Object.keys(culture).length === 3 && Object.keys(categoryLocale).length === 3) startHookCallback()
  }, [])
}

export default StartAppRequests
