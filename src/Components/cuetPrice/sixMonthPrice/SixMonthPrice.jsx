import React from 'react'
import "./SixMonthPrice.scss";

// import BronzeSection from '../cuetPrice/bronze/BronzeSection'
import BronzeSection from '../../cuetPrice/bronze/BronzeSection'
import SilverSection from '../../cuetPrice/silver/SilverSection';
import GoldSection from '../../cuetPrice/gold/GoldSection';
import PlatinumSection from '../../cuetPrice/platinum/PlatinumSection';

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