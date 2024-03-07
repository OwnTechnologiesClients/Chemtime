import React from 'react'
import "./SixMonthPrice.scss";

// import BronzeSection from '../iitJamPrice/bronze/BronzeSection'
import BronzeSection from '../../iitJamPrice/bronze/BronzeSection'
import SilverSection from '../../iitJamPrice/silver/SilverSection';
import GoldSection from '../../iitJamPrice/gold/GoldSection';
import PlatinumSection from '../../iitJamPrice/platinum/PlatinumSection';

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