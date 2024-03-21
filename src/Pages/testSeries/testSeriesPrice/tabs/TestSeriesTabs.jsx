import React, { useEffect, useState } from "react";
import "./TestSeriesTabs.scss";
import OnlineTestSeriesCourse from "../onlineTestSeriesCourse/OnlineTestSeriesCourse";


const TestSeriesTabs = () => {
    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle: 'Crash Course',
            title: <OnlineTestSeriesCourse />,
        },
        // {
        //     id: 2,
        //     tabTitle: 'New Batches',
        //     title: <NewBatches />,
        // },



    ]
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }
    return (
        <div className='container'>
            <div className='testseries-tabs'>
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

export default TestSeriesTabs