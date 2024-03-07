import React from 'react'
import "./OneYearPrice.scss";

import BronzeSection from '../../cuetPrice/bronze/BronzeSection'
import BronzeOneYearSection from '../../cuetPrice/bronze/oneYear/BronzeOneYearSection'
import SilverSection from '../../cuetPrice/silver/SilverSection';
import GoldSection from '../../cuetPrice/gold/GoldSection';
import PlatinumSection from '../../cuetPrice/platinum/PlatinumSection';
import SilverOneYearSection from '../../cuetPrice/silver/oneYear/SilverOneYearSection';
import GoldOneYearSection from '../../cuetPrice/gold/oneYear/GoldOneYearSection';
import PlatinumOneYearSection from '../../cuetPrice/platinum/oneYear/PlatinumOneYearSection';

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