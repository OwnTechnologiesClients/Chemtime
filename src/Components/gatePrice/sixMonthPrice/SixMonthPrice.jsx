import React from 'react'
import "./SixMonthPrice.scss";

// import BronzeSection from '../gatePrice/bronze/BronzeSection'
import BronzeSection from '../../gatePrice/bronze/BronzeSection'
import SilverSection from '../../gatePrice/silver/SilverSection';
import GoldSection from '../../gatePrice/gold/GoldSection';
import PlatinumSection from '../../gatePrice/platinum/PlatinumSection';

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