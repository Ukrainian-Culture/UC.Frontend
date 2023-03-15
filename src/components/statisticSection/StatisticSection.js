import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import '../statisticSection/statisticSection.scss'

function StatisticSection({ enterStatistic }) {
  const state = useSelector((state) => state)
  const language = state.changeLanguage.lang
  const statistic = state.statistic
  const userOnline = state.userOnline
  const aboutOblast = state.aboutOblast
  const interfaceLang = state.interfaceLang

  //===================================================
  const [nothing_text] = useState('no data 🤯')

  const tl = useRef()
  const statisticRef = useRef()

  //---------------------------------------------------

  //function to process arra of region population from statistic api
  const processOlastPopulation = () => {
    return statistic.data.populationOfRegions.map((el, index) => {
      if (el.key === 'м.Київ')
        return {
          key:
            aboutOblast.aboutOblast[
              aboutOblast.getIndex('Kyiv', aboutOblast.aboutOblast)
            ][language],
          value: el.value,
          alternative: language === '0' ? 'Kyiv' : 'м.Київ',
        }
      return {
        key:
          aboutOblast.aboutOblast[
            aboutOblast.getIndex(el.key, aboutOblast.aboutOblast)
          ][language],
        value: el.value,
        alternative: '',
      }
    })
  }

  useEffect(() => {
    if (state.startSettings.enterStatistic) {
      console.log('number count down anim')
      const ctx = gsap.context(() => {
        tl.current && tl.current.progress(0).kill()

        const dur = 1

        tl.current = gsap
          .timeline()
          .from('.statisticBigNumber', {
            innerText: 0,
            duration: dur,
            snap: 'innerText',
          })
          .from(
            '.cityPopulation',
            {
              innerText: 0,
              duration: dur,
              snap: 'innerText',
              stagger: 0.2,
            },
            `-=${dur}`,
          )
      }, statisticRef)

      return () => ctx.revert()
    }
  }, [state.startSettings.enterStatistic])

  return (
    <>
      {!statistic.loading && statistic.error === '' ? (
        <div className="statisticSection" ref={statisticRef}>
          <div className="statisticContent">
            <div className="statisticLeft">
              <div className="statisticWrap">
                <div className="statisticBlockHeader">
                  {interfaceLang[language].peopleOnline}
                </div>
                <div className="statisticBigNumber">
                  {userOnline.data == 0 ? 1 : userOnline.data}
                </div>
              </div>

              <div className="statisticWrap">
                <div className="statisticBlockHeader">
                  {interfaceLang[language].nationalMonuments}
                </div>
                <div className="statisticBigNumber statisticBigNumber_national">
                  {state.startSettings.enterStatistic
                    ? statistic.data.monuments
                    : 0}
                </div>
              </div>

              <div className="statisticWrap">
                <div className="statisticBlockHeader">
                  {interfaceLang[language].usencoHerritage}
                </div>
                <div className="statisticBigNumber">
                  {state.startSettings.enterStatistic
                    ? statistic.data.unescoHeritage
                    : 0}
                </div>
              </div>
            </div>

            <div className="statisticRight">
              <div className="statisticWrap">
                <div className="statisticWrapRightFirst">
                  <div className="statisticBlockHeaderRightFirst">
                    <div className="statisticBlockHeader">
                      {interfaceLang[language].ukrainePopulation}
                    </div>
                  </div>
                  <div className="statisticBigNumber">
                    {state.startSettings.enterStatistic
                      ? statistic.data.ukrainePopulation
                      : 0}
                  </div>
                </div>
              </div>
              {processOlastPopulation().map((el, index) => {
                return (
                  <div className="cityBlock" key={`CBCNCP_${index}`}>
                    <div className="cityBlock_left">
                      <div className="cityName">{el.alternative || el.key}</div>
                      <div className="cityPopulation">
                        {state.startSettings.enterStatistic ? el.value : 0}
                      </div>
                    </div>
                    <div className="cityBlock_right">
                      <div className="cityBlock_emoji">
                        {
                          aboutOblast.aboutOblast[
                            aboutOblast.getIndex(
                              el.key,
                              aboutOblast.aboutOblast,
                            )
                          ].emoji
                        }
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default StatisticSection
