import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../statisticSection/statisticSection.scss'

function StatisticSection() {
  const state = useSelector((state) => state)
  const statistic = state.statistic
  //===================================================
  const [nothing_text] = useState('no data 🤯')

  return (
    <>
      {!statistic.loading && statistic.error === '' ? (
        <div className="statisticSection">
          <div className="statisticContent">
            <div className="statisticLeft">
              <div className="statisticWrap">
                <div className="statisticBlockHeader">People online</div>
                <div className="statisticBigNumber">12</div>
              </div>
              <div className="statisticWrap">
                <div className="statisticBlockHeader">national monuments</div>
                <div className="statisticBigNumber">
                  {statistic.data.monuments}
                </div>
              </div>
              <div className="statisticWrap">
                <div className="statisticBlockHeader">UNESCO herritage</div>
                <div className="statisticBigNumber">
                  {statistic.data.unescoHeritage}
                </div>
              </div>
            </div>
            <div className="statisticRight">
              <div className="statisticWrap">
                <div className="statisticBlockHeader">Ukraine population</div>
                <div className="statisticBigNumber">
                  {' '}
                  {statistic.data.ukrainePopulation}
                </div>
              </div>
              {statistic.data.populationOfRegions.map((el, index) => {
                return (
                  <div className="cityBlock" key={`CBCNCP_${index}`}>
                    <div className="cityName">{el.key}</div>
                    <div className="cityPopulation">{el.value}</div>
                  </div>
                )
              })}
              {/* <div className="cityBlock">
              <div className="cityName">Donetsk</div>
              <div className="cityPopulation">4,387,702</div>
            </div>
            <div className="cityBlock">
              <div className="cityName">Dnipro</div>
              <div className="cityPopulation">3,258,705</div>
            </div>
            <div className="cityBlock">
              <div className="cityName">Kyiv</div>
              <div className="cityPopulation">2,900,920</div>
            </div>
            <div className="cityBlock">
              <div className="cityName">Kharkiv</div>
              <div className="cityPopulation">2,720,342</div>
            </div>
            <div className="cityBlock">
              <div className="cityName">Lviv</div>
              <div className="cityPopulation">2,535,476</div>
            </div> */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default StatisticSection
