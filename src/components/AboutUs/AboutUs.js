import React from 'react'
import '../AboutUs/aboutUs.scss';

function AboutUs() {
    return (
        <div className='AboutUs_section'>
            <div className='OurTeamText'>
                <span>Our team</span>
            </div>
            <div className='TeamLead_Wrap'>
                <div className='TeamLead'></div>
                <div className='PetroDescr'>
                    <span className='petro'>Petro Horoh</span>
                    <span>team leader, backend, microsoft azure manager</span>
                </div>
            </div>
            <div className='Main_Wrap'>
                <div className='Left_Wrap'>
                    <div className='Misha_Wrap'>
                        <div className='Misha'>M</div>
                        <div className='MishaDescr'>
                            <span className='misha'>Mykhailo Holod</span>
                            <span>backend, git master </span>
                        </div>
                    </div>
                    <div className='Katya_Wrap'>
                        <div className='Katya'></div>
                        <div className='KatyaDescr'>
                            <span className='katya'>Kateryna Danylchenko</span>
                            <span>backend, administrator </span>
                        </div>
                    </div>
                    <div className='Sophia_Wrap'>
                        <div className='Sophia'></div>
                        <div className='SophiaDescr'>
                            <span className='sophia'>Sophia Dyka</span>
                            <span>frontend </span>
                        </div>
                    </div>
                </div>
                <div className='Right_Wrap'>
                    <div className='Denys_Wrap'>
                        <div className='Denys'></div>
                        <div className='DenysDescr'>
                            <span className='denys'>Muzyka Denys</span>
                            <span>frontend, designer  </span>
                        </div>
                    </div>
                    <div className='Bohdan_Wrap'>
                        <div className='Bohdan'></div>
                        <div className='BohdanDescr'>
                            <span className='bohdan'>Bohdan Vivchar</span>
                            <span>backend, devOps </span>
                        </div>
                    </div>
                    <div className='Khrystyna_Wrap'>
                        <div className='Khrystyna'></div>
                        <div className='KhrystynaDescr'>
                            <span className='khrystyna'>Khrystyna Hihliuk </span>
                            <span>backend, translation </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutUs
