import React from 'react'
import "./OneYearPrice.scss";

import BronzeSection from '../price/bronze/BronzeSection'
import BronzeOneYearSection from '../price/bronze/oneYear/BronzeOneYearSection'
import SilverSection from '../price/silver/SilverSection';
import GoldSection from '../price/gold/GoldSection';
import PlatinumSection from '../price/platinum/PlatinumSection';
import SilverOneYearSection from '../price/silver/oneYear/SilverOneYearSection';
import GoldOneYearSection from '../price/gold/oneYear/GoldOneYearSection';
import PlatinumOneYearSection from '../price/platinum/oneYear/PlatinumOneYearSection';

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