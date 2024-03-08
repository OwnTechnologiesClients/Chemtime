import React from 'react'
import "./SixMonthPrice.scss";

import BronzeSection from '../csirPrice/bronze/BronzeSection'
import SilverSection from '../csirPrice/silver/SilverSection';
import GoldSection from '../csirPrice/gold/GoldSection';
import PlatinumSection from '../csirPrice/platinum/PlatinumSection';

const SixMonthPrice = () => {
    return (
        <div className='pricing-row'>
            <BronzeSection />
            <SilverSection />
            <GoldSection />
            <PlatinumSection />

        </div>
    )
}

export default SixMonthPrice