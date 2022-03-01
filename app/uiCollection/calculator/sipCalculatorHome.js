import React from 'react'
import "../../media/scss/sipCalculatorHome.scss"
import SIP from '../../media/images/m_SIP-Calculator.png';
import Delay from '../../media/images/delay.png';
import Step from '../../media/images/step.png';
import { useState } from "react";
import SipMainNavigation from './sipNavigation.js'

// Home Page

export default function SipCalculatorHome() {
  const [isFirst, setIsFirst] = useState(true);
  function changeState() {
    setIsFirst(false);
  }
 
  return (
    <>
    {isFirst=== true &&(
    <div className='first'>
        <div className='image1'>
           <img src={SIP} alt="cal"  height={32} width={32}/>
        </div>
        <div className='div1'>
          <div  className='head2' onClick={changeState} > 
           <h3 >SIP Calculator</h3>
          <p  >Future projection of a SIP amount with given expected return %</p >
          </div>
        </div>
        <div className='image2'>
           <img src ={Delay} alt="del"  height={32} width={32}/>
        </div>
        <div className='div2'>
            <h3 className='head1'>SIP Delay Calculator</h3>
            <p  className='head1'>Future projection if SIP installment is delayed</p >
        </div>  

        <div className='image3'>
           <img src={Step} alt="step"  height={32} width={32}/>
        </div>
        <div  className='div3'>
            <h3 className='head1'>SIP Step up Calculator</h3>
            <p className='head1'>Future projection of SIP with Yearly increment i installment amount</p >
        </div>
    </div>
    )}
    {isFirst === false&&(
      <div>
        <SipMainNavigation/>
      </div>
    )}

    </>
  )
}
