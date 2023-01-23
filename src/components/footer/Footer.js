import React from 'react';
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerWrap">
                <div className="footerDefaultBlock">
                    <div className="footerText">
                        Logo
                    </div>
                    <div className="footerText">
                        Design and development
                    </div>
                </div>
                <div className="footerDefaultBlock">
                    <div className="footerText">
                       ucsupport@gmail.com
                    </div>
                    <div className="footerText">
                       Lviv, Ukraine
                    </div>
                </div>
                <div className="footerDefaultBlock">
                    <div className="footerText">
                       About us
                    </div>
                    <div className="footerText">
                       Privacy Policy
                    </div>
                    <div className="footerText">
                       Term & Conditions
                    </div>
                </div>
                <div className="footerFormWrap">
                    <div className="footerFormText">
                        <div className="footerFormTitle">
                            Get 20% off
                        </div>
                        <div className="footerFormSubtitle">
                            By subscribing to our newsletter
                        </div>
                    </div>
                    <form className="footerForm">
                        <input type="text" className='footerInput' placeholder='Enter your email'/>
                        <button className="footerButton">icon</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;