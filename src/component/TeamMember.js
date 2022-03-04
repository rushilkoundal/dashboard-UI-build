import { Avatar } from '@mui/material'
import './TeamMember.css'
import { useState, useEffect } from 'react';

function TeamMember() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000));
    }, []);

    return (
        <div className='container teamMember'>
            <span><Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/></span>
            <span>Name</span>
            <span><button className='role'>Role Assigned</button></span>
        </div>
    )
}

export default TeamMember