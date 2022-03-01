import React from 'react'
import '../../media/scss/sipSlider.scss';
import SipSliderInput from './sipSliderInput';
import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis ,Tooltip,Legend,ResponsiveContainer,CartesianGrid } from "recharts";
import "core-js/stable";
import 'core-js/es/array';
import "regenerator-runtime/runtime";
// import CustomTooltip from "./customTooltip";

export default function SipResultsChart(props) {
    const [isGraph, setIsGraph] = useState(true);
    function changeState() {
      setIsGraph(false);
    }
    // const numWords = require('num-words')
    const data= props.graphData;
    const props1=props.invested;
    const props2=props.finalVal;
  return (
      <>
      {isGraph === true && (
   <div>
    <div className='main'>
       <div>
        <h4 className='tagform'>Amounts(Rs.)</h4>
         <h4 className='tagfor'>Periods in Years</h4>
         <h3 className='tagforrm'>Growth Chart</h3>
       
       </div>
     {/* Chart */}
        <div className='main1'>
          {
         <ResponsiveContainer>
        {/* <CustomTooltip> */}
        <AreaChart className='chart' width={800} height={350} data={data}  margin={{
          top: 30, right: 20, bottom: 20, left: 35,
        }}>

      <CartesianGrid strokeDasharray="5 3"/>
      
      <XAxis  />
      <Tooltip  />
            <Area
        type="monotone"
        dataKey="years"
        stackId="1"
        stroke="black"
        fill="black"
      />
      <YAxis   />
      
      {/* <Tooltip  /> */}
      <Legend verticalAlign="top" height={30}/>
  
        <Area 
        type="monotone" 
        name="Investment"
        dataKey="investment"
        stackId="1" 
        stroke="#00008B" 
        fill="#00008B" />
      
        <Area
        
        type="monotone"
        name='Return'
        dataKey="return"
        stackId="2"
        stroke="#0096FF"
        fill="#0096FF"
      />
    </AreaChart>
    {/* </CustomTooltip> */}
    </ResponsiveContainer>
      }
     {/* Result Section */}
        </div>
        <div className='main2'>
            <h3 className='reshead'>Result</h3>
            <p className='results'>If you invest <span className='propsStyle'>&#8377;
             {(props1).toLocaleString('en-IN')}</span> per month for a period of 
             <span className='propsStyle'> {props.period}</span> years, You can create wealth equivalent to    
              <span className='propsStyle2'>&#8377;{(props2).toLocaleString('en-IN', 
              { style: 'decimal', maximumFractionDigits : 0, minimumFractionDigits : 0 })}</span></p>
            
            <h6 className='note'>Note: Based on Monthly compounding</h6>
        </div>
        <div className='main3'>
          <button className='button2' onClick={changeState}>ReCalculate </button>
        </div>
    </div>
    </div>
      )}
       {isGraph === false && (
        <div>
          <SipSliderInput/>
        </div>
      )}
</>
  )
}
