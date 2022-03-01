import React from 'react';
import '../media/scss/App.scss';
import Navbar from './calculator/navBar.js';
import SipCalculatorHome from './calculator/sipCalculatorHome.js';
import Sidebar from './calculator/sideBar.js'

function App() {
  return (
    <div>
    <Sidebar/>
    <Navbar/>
    <SipCalculatorHome/>
    </div>
  );
}

export default App;
