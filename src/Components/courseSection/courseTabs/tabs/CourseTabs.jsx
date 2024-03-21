import React, { useEffect, useState } from "react";
import OfflineCourse from "../offlineCourse/OfflineCourse";
import OnlineCourse from "../onlineCourse/OnlineCourse";
import "./CourseTabs.scss";


const CourseTabs = () => {
    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle: 'Online Courses',
            title: <OnlineCourse />,
        },
        {
            id: 2,
            tabTitle: 'Offline Courses',
            title: <OfflineCourse />,
        },



    ]
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }
    return (
        <div className='container'>
            <div className='course-tabs'>
                {tabs.map((tab, i) =>
                    <button
                        key={i}
                        id={tab.id}
                        disabled={currentTab === `${tab.id}`}
                        onClick={(handleTabClick)}>

                        {tab.tabTitle}

                    </button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` &&
                            <div>
                                <p>{tab.title}</p>
                                <p>{tab.content}</p>
                            </div>
                        }

                    </div>

                )}

            </div>

        </div>
    )
}

export default CourseTabs