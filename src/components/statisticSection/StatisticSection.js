import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import '../statisticSection/statisticSection.scss'

function StatisticSection() {
    const state = useSelector((state) => state)
    const language = state.changeLanguage.lang
    const statistic = state.statistic
    const userOnline = state.userOnline
    const aboutOblast = state.aboutOblast
    const interfaceLang = state.interfaceLang

    //===================================================
    const [nothing_text] = useState('no data 🤯')

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
                    alternative: language === '0' ? 'Kyiv' : 'м.Київ'
                }
            return {
                key:
                    aboutOblast.aboutOblast[
                        aboutOblast.getIndex(el.key, aboutOblast.aboutOblast)
                        ][language],
                value: el.value,
                alternative: ''
            }
        })
    }

    return (
        <>
            {!statistic.loading && statistic.error === '' ? (
                <div className="statisticSection">
                    <div className="statisticContent">
                        <div className="statisticLeft">
                            <div className="statisticWrap">
                                <div className="statisticBlockHeader">{interfaceLang[language].peopleOnline}</div>
                                <div className="statisticBigNumber">{userOnline.data}</div>
                            </div>
                            <div className="statisticWrap">
                                <div className="statisticBlockHeader">{interfaceLang[language].nationalMonuments}</div>
                                <div className="statisticBigNumber">
                                    {statistic.data.monuments}
                                </div>
                            </div>
                            <div className="statisticWrap">
                                <div className="statisticBlockHeader">{interfaceLang[language].usencoHerritage}</div>
                                <div className="statisticBigNumber">
                                    {statistic.data.unescoHeritage}
                                </div>
                            </div>
                        </div>
                        <div className="statisticRight">
                            <div className="statisticWrap">
                                <div className="statisticWrapRightFirst">
                                    <div className="statisticBlockHeaderRightFirst">
                                        <div
                                            className="statisticBlockHeader">{interfaceLang[language].ukrainePopulation}</div>
                                    </div>
                                    <div className="statisticBigNumber">
                                        {' '}
                                        {statistic.data.ukrainePopulation}
                                    </div>
                                </div>
                            </div>
                            {processOlastPopulation().map((el, index) => {
                                return (
                                    <div className="cityBlock" key={`CBCNCP_${index}`}>
                                        <div className="cityBlock_left">
                                            <div className="cityName">{el.alternative || el.key}</div>
                                            <div className="cityPopulation">{el.value}</div>
                                        </div>
                                        <div className="cityBlock_right">
                                            <div className="cityBlock_emoji">
                                                {aboutOblast.aboutOblast[aboutOblast.getIndex(el.key, aboutOblast.aboutOblast)].emoji}
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