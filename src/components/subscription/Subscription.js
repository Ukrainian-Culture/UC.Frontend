import React, { useRef } from 'react'
import './subscription.scss'
import useGetScreenWidth from '../../hooks/useGetScreenWidth'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_USER_SUCCESS } from '../../redux-store/fetchUser/fetchUserConst'

const Subscription = ({ popup, setIsVisible, setDaysAmount }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  // current language
  const language = state.changeLanguage.lang
  //variable for text in  interface in different language
  const interfaceLang = state.interfaceLang[language]

  //====================================
  const array = [
    {
      days: 7,
      description: ['7 days', '7 днів'],
      type: ['free', 'безкоштовно'],
      price: ['$0','₴0'],
      url:[' ',' '],
    },
    {
      days: 31,
      description: ['$8/mo per month', '₴300/м на місяць'],
      type: ['month', 'місяць'],
      price: ['$8','₴300'],
      url: ['https://secure.wayforpay.com/button/b414ea931b158','https://secure.wayforpay.com/button/be7e7c568acea'],
    },
    {
      days: 120,
      description: ['$5/mo per month', '₴150/м на місяць'],
      type: ['quarter', 'квартал'],
      price: ['$15','₴550'],
      url: ['https://secure.wayforpay.com/button/bcb979111f790', 'https://secure.wayforpay.com/button/bba8a0f1e8192'],
    },
    {
      days: 365,
      description: ['$2,5/mo per month', '₴92,5/м на місяць'],
      type: ['year', 'рік'],
      price: ['$30','₴1110'],
      url: ['https://secure.wayforpay.com/button/bb0727a70d9c1','https://secure.wayforpay.com/button/b67cbf69a24e3'],
    },
  ]

  const cardClick = (e, days) => {
    if (e.target.className.split(' ')[1] === 'some_el_el0') {
      // if popup block
      if (popup) {
        console.log('subscription days setted!')
        setIsVisible((el) => !el)
        setDaysAmount(days)
      }
    }
  }

  const profileWrap = useRef()
  // getting screen size from current page
  useGetScreenWidth({ refWidth: profileWrap })
  return (
      <div ref={profileWrap} className="subscription">
        <div className="subscriptionHeader">
          <p>{interfaceLang.subscription}</p>
        </div>
        <div className="subscriptionFeatures">
          <div className="feature1">
            {interfaceLang.search} <span>{interfaceLang.history}</span>{' '}
          </div>
          <div className="feature2">
            {interfaceLang.download_f_a} <span>{interfaceLang.full_article}</span>
          </div>
          <div className="feature3">
            {interfaceLang.article_f_t} <span>{interfaceLang.full_translation}</span>
          </div>
          <div className="feature4">
            {interfaceLang.article_f_as} <span>{interfaceLang.full_access}</span>
          </div>
        </div>
        <div className="subscriptionButtons">
          {array.map((el, index) => (
              <div
                  className={`some_el${index}`}
                  onClick={(e) => cardClick(e, el.days)}
                  key={`${index}`}
              >
                <a href={el.url[language]}>
                  <div className='wrap'>
                    <div className={`subscriptionType some_el_el${index}`}>
                      {el.type[language]}{' '}
                    </div>
                    <React.Fragment>
                      <br />
                    </React.Fragment>
                    <div className={`subscriptionPrice some_el_el${index}`}>
                      {el.price[language]}{' '}
                    </div>
                    <React.Fragment>
                      <br />
                    </React.Fragment>
                    <div className={`subscriptionDescr some_el_el${index}`}>
                      {el.description[language]}{' '}
                    </div>
                  </div>
                </a>
              </div>
          ))}
        </div>
      </div>
  )
}

export default Subscription
