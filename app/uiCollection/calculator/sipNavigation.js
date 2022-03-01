import React from 'react';
import '../../media/scss/sipSlider.scss';
import { useState } from "react";
import SipCalculatorHome from './sipCalculatorHome.js';
import SipSliderInput from './sipSliderInput.js'



export default function SipMainNavigation() {
    const [isBack, setIsBack] = useState(true);
    function changeState() {
      setIsBack(false);
    }
  return (
     <>
      {isBack === true && (
    <div>
    <div className='heading'> 
    <h3>SIP Calculator </h3> 
</div>
<div >
   <button className='back' onClick={changeState}  >⬅ Back</button>
   
</div>
<SipSliderInput/>

</div>

  )}
  {
      isBack=== false &&(
          <div>
              <SipCalculatorHome/>
          </div>
      )
  }

</>
  )
}
