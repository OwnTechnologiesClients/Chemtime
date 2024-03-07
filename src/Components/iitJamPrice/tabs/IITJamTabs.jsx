import React, { useEffect, useState } from "react";
import OneYearPrice from "../../iitJamPrice/oneYearPrice/OneYearPrice";
// import SixMonthPrice from "../sixMonthPrice/SixMonthPrice";
import SixMonthPrice from "../../iitJamPrice/sixMonthPrice/SixMonthPrice";
import "./IITJamTabs.scss";


const IITJamTabs = () => {
    const [currentTab, setCurrentTab] = useState('2');

    const tabs = [
        
        {
            id: 2,
            tabTitle: '1 Year Plan',
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

export default IITJamTabs