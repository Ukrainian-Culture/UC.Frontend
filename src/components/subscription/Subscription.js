import React, {useRef} from 'react'
import './subscription.scss'
import useGetScreenWidth from "../../hooks/useGetScreenWidth";


const Subscription = () =>{
    const array = [
        {description:"7 days",type:"free",price:0},
        {description:"$8/mo billed monthly ",type:"monthly",price:8,url:"https://secure.wayforpay.com/button/b414ea931b158"},
        {description:"$5/mo billed monthly ",type:"quarterly",price:15,url:"https://secure.wayforpay.com/button/bcb979111f790"},
        {description:"$2,5/mo billed monthly ",type:"annual",price:30,url:"https://secure.wayforpay.com/button/bb0727a70d9c1"}
    ]
    const profileWrap = useRef()
    // getting screen size from current page
    useGetScreenWidth({ refWidth: profileWrap })
    return(
        <div ref={profileWrap} className='subscription'>
            <div className='subscriptionHeader'>
                <p>Subscription</p>
            </div>
            <div className='subscriptionFeatures'>
                <div className='feature1'>search <span>history</span> </div>
                <div className='feature2'>download <span>full article</span></div>
                <div className='feature3'>article <span>full translation</span></div>
                <div className='feature4'>article <span>full access</span></div>
            </div>
            <div className='subscriptionButtons'>
            {array.map((el,index)=>(
                    <div className={`some_el${index}`} key={`${index}`}>
                        <a href={el.url}>
                            <div >
                                <div className='subscriptionType'>{el.type} </div>
                                <React.Fragment><br/></React.Fragment>
                                <div className='subscriptionPrice'>${el.price} </div>
                                <React.Fragment><br/></React.Fragment>
                                <div className='subscriptionDescr'>{el.description} </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Subscription;