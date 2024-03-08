import React from 'react'
import "./OneYearPrice.scss";

import BronzeSection from '../csirPrice/bronze/BronzeSection'
import BronzeOneYearSection from '../csirPrice/bronze/oneYear/BronzeOneYearSection'
import SilverSection from '../csirPrice/silver/SilverSection';
import GoldSection from '../csirPrice/gold/GoldSection';
import PlatinumSection from '../csirPrice/platinum/PlatinumSection';
import SilverOneYearSection from '../csirPrice/silver/oneYear/SilverOneYearSection';
import GoldOneYearSection from '../csirPrice/gold/oneYear/GoldOneYearSection';
import PlatinumOneYearSection from '../csirPrice/platinum/oneYear/PlatinumOneYearSection';

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