import React, { useState } from 'react'
import './Sidebar.css'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom';
import { logOut } from '../firebase';

function Sidebar() {
    const [show, setShow] = useState(false);
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch {
            alert('error!')
        }
    }

    return (
        <div className='sidebar'>
            <div className="sidebarList">
                <button onClick={() => setShow(!show)} className={`${show && 'active'}`}>
                    <Link className='link' to="/dashboard">
                        <DashboardRoundedIcon />
                        <p>Dashboard</p>
                    </Link>
                </button>
                <button>
                    <Link className='link' to="/analytics">
                        <BarChartRoundedIcon />
                        <p>Analytics</p>
                    </Link>
                </button>
                <button>
                    <Link className='link' to="/trading">
                        <AttachMoneyRoundedIcon />
                        <p>Trading</p>
                    </Link>
                </button>
                <button>
                    <Link className='link' to="/notification">
                        <NotificationsRoundedIcon />
                        <p>Notification</p>
                    </Link>
                </button>
                <button onClick={handleSignOut} style={{ marginTop: '310px' }}>
                    <LogoutRoundedIcon />
                    <p>Logout</p>
                </button>
            </div>
        </div>
    )
}

export default Sidebar