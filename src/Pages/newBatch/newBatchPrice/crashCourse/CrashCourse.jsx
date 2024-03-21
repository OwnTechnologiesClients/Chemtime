import React from 'react'
import "./CrashCourse.scss";
import OnlineTestCSIR from '../onlineTestCSIR/OnlineTestCSIR';
import JRFJumpstart from '../jrfJumpstart/JRFJumpstart';

const CrashCourse = () => {
    return (
        <div className='pricing-row'>
            <OnlineTestCSIR />
            <JRFJumpstart />

        </div>
    )
}

export default CrashCourse