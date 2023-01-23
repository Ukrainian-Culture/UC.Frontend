import React from 'react'
import "../statisticSection/statisticSection.scss"

function StatisticSection() {
    return (
        <div className='statisticSection'>
            <div className="statisticContent">
                <div className="statisticLeft">
                    <div className="statisticWrap">
                        <div className="statisticBlockHeader">
                            People online
                        </div>
                        <div className="statisticBigNumber">12</div>
                    </div>
                    <div className="statisticWrap">
                        <div className="statisticWrap">
                            <div className="statisticBlockHeader">
                             national monuments
                            </div>
                            <div className="statisticBigNumber">
                                6921
                            </div>
                        </div>
                        <div className="statisticWrap">
                            <div className="statisticBlockHeader">
                               UNESCO herritage
                            </div>
                            <div className="statisticBigNumber">371</div>
                        </div>
                    </div>
                </div>
                <div className="statisticRight">
                    <div className="statisticWrap">
                        <div className="statisticBlockHeader">
                            Ukraine population
                        </div>
                        <div className="statisticBigNumber">43,100,287</div>
                    </div>
                    <div className="cityBlock">
                        <div className="cityName">
                            Donetsk
                        </div>
                        <div className="cityPopulation">
                            4,387,702
                        </div>
                    </div>
                    <div className="cityBlock">
                        <div className="cityName">
                            Dnipro
                        </div>
                        <div className="cityPopulation">
                            3,258,705
                        </div>
                    </div>
                    <div className="cityBlock">
                        <div className="cityName">
                           Kyiv
                        </div>
                        <div className="cityPopulation">
                           2,900,920
                        </div>
                    </div>
                    <div className="cityBlock">
                        <div className="cityName">
                            Kharkiv
                        </div>
                        <div className="cityPopulation">
                            2,720,342
                        </div>
                    </div>
                    <div className="cityBlock">
                        <div className="cityName">
                            Lviv
                        </div>
                        <div className="cityPopulation">
                            2,535,476
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisticSection
