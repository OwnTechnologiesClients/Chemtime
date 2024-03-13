import React, { useEffect, useState } from "react";
import OneYearPrice from "../../newBatchPrice/oneYearPrice/OneYearPrice";
import SixMonthPrice from "../../newBatchPrice/sixMonthPrice/SixMonthPrice";
import "./NewBatchTabs.scss";


const NewBatchTabs = () => {
    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle: 'Crash Course',
            title: <SixMonthPrice/>,
        },
        {
            id: 2,
            tabTitle: 'New Batches',
            title: <OneYearPrice/>,
        },
        


    ]
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }
    return (
        <div className='container'>
            <div className='tabs'>
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

export default NewBatchTabs