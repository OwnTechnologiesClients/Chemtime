import React from 'react'
import "./SixMonthPrice.scss";

// import BronzeSection from '../newBatchPrice/bronze/BronzeSection'
import BronzeSection from '../../newBatchPrice/bronze/BronzeSection'
import SilverSection from '../../newBatchPrice/silver/SilverSection';
import GoldSection from '../../newBatchPrice/gold/GoldSection';
import PlatinumSection from '../../newBatchPrice/platinum/PlatinumSection';

const SixMonthPrice = () => {
    return (
        <div className='pricing-row'>
            <BronzeSection />
            {/* <SilverSection />
            <GoldSection />
            <PlatinumSection /> */}

        </div>
    )
}

export default SixMonthPrice