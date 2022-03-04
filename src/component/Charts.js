import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import './Charts.css'

function Charts() {
    const data = [{ uv: 4000 }, { uv: 1700 }, { uv: 3200 }, { uv: 3100 }, { uv: 5000 }]
    const data1 = [{ uv: 4000 }, { uv: 1700 }, { uv: 3200 }, { uv: 3100 }, { uv: 2000 }]
    const data2 = [{ uv: 4000 }, { uv: 1700 }, { uv: 3200 }, { uv: 3100 }, { uv: 4500 }]

    return (
        <>
            <div className="container charts">
                <div className="row text-center">
                    <div className="col chart">
                        <h3>Italy</h3>
                        <span className='rate1' style={{color: 'lightgreen'}}>450<ArrowDropUp /></span>
                        <ResponsiveContainer className="chartWidth" width="30%" aspect={4 / 1}>
                            <LineChart data={data}>
                                <Line dataKey='uv' stroke='#0f0' />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="col chart">
                        <h3>US</h3>
                        <span className='rate2' style={{color: 'red'}}>345<ArrowDropDown /></span>
                        <ResponsiveContainer className="chartWidth" width="30%" aspect={4 / 1}>
                            <LineChart data={data1}>
                                <Line dataKey='uv' stroke='#f00' />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="col chart">
                        <h3>Canada</h3>
                        <span className='rate3' style={{color: 'lightgreen'}}>410<ArrowDropUp /></span>
                        <ResponsiveContainer className="chartWidth" width="30%" aspect={4 / 1}>
                            <LineChart data={data2}>
                                <Line dataKey='uv' stroke='#0f0' />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Charts