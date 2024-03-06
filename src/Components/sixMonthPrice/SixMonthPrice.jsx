import React from 'react'
import "./SixMonthPrice.scss";

import BronzeSection from '../price/bronze/BronzeSection'
import BronzeOneYearSection from '../price/bronze/oneYear/BronzeOneYearSection'
import SilverSection from '../price/silver/SilverSection';
import GoldSection from '../price/gold/GoldSection';
import PlatinumSection from '../price/platinum/PlatinumSection';

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