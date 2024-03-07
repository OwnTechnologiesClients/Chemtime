import React from 'react'
import "./OneYearPrice.scss";

import BronzeSection from '../../gatePrice/bronze/BronzeSection'
import BronzeOneYearSection from '../../gatePrice/bronze/oneYear/BronzeOneYearSection'
import SilverSection from '../../gatePrice/silver/SilverSection';
import GoldSection from '../../gatePrice/gold/GoldSection';
import PlatinumSection from '../../gatePrice/platinum/PlatinumSection';
import SilverOneYearSection from '../../gatePrice/silver/oneYear/SilverOneYearSection';
import GoldOneYearSection from '../../gatePrice/gold/oneYear/GoldOneYearSection';
import PlatinumOneYearSection from '../../gatePrice/platinum/oneYear/PlatinumOneYearSection';

const OneYearPrice = () => {
    return (
        <div className='pricing-row'>
            <BronzeOneYearSection />
            <SilverOneYearSection />
            <GoldOneYearSection />
            <PlatinumOneYearSection />

        </div>
    )
}

export default OneYearPrice