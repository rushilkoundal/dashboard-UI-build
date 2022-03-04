import { ArrowDropDown, ArrowDropUp, AttachMoney, CurrencyYen, EuroSymbol } from '@mui/icons-material'
import React from 'react'
import './FeaturedInfo.css'

function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem item">
            <span className="featuredTitle">Profit</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$5900.00</span>
            </div>
        </div>
        <div className="featuredItem item2">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$950.00</span>
                <span style={{color: 'lightgreen', marginLeft: '2em'}} className="featuredMoney"><ArrowDropUp />+56%</span>
            </div>
        </div>
        <div className="featuredItem item3">
            <span className="featuredTitle">Losses</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$450.00</span>
                <span style={{color: 'red', marginLeft: '2em'}} className="featuredMoney"><ArrowDropDown />+56%</span>
            </div>
        </div>
        <div style={{borderRight: 'none'}} className="featuredItem">
            <span className="featuredTitle">Currencies</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney"><AttachMoney /><EuroSymbol /><CurrencyYen /></span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedInfo