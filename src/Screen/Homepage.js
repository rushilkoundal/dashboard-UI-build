import React from 'react'
import './Homepage.css'
import Navbar from '../component/Navbar';
import FeaturedInfo from '../component/FeaturedInfo';
import Charts from '../component/Charts';
import WidgetL from '../component/WidgetL';
import WidgetR from '../component/WidgetR';

function Homepage() {
  return (
    <div className='homepage'>
      <Navbar title="Dashboard"/>
      <FeaturedInfo />
      <Charts />
      <div className="widgets">
        <WidgetL />
        <WidgetR />
      </div>
    </div>
  )
}

export default Homepage