import React from 'react'
import "./SixMonthPrice.scss";

// import BronzeSection from '../newBatchPrice/bronze/BronzeSection'
import BronzeSection from '../../newBatchPrice/bronze/BronzeSection'
import SilverSection from '../../newBatchPrice/silver/SilverSection';

const SixMonthPrice = () => {
    return (
        <div className='pricing-row'>
            <BronzeSection />
            <SilverSection />
            {/* <GoldSection />
            <PlatinumSection /> */}

        </div>
    )
}

export default SixMonthPrice