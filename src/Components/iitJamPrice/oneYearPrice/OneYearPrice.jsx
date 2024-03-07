import React from 'react'
import "./OneYearPrice.scss";

import BronzeSection from '../../iitJamPrice/bronze/BronzeSection'
import BronzeOneYearSection from '../../iitJamPrice/bronze/oneYear/BronzeOneYearSection'
import SilverSection from '../../iitJamPrice/silver/SilverSection';
import GoldSection from '../../iitJamPrice/gold/GoldSection';
import PlatinumSection from '../../iitJamPrice/platinum/PlatinumSection';
import SilverOneYearSection from '../../iitJamPrice/silver/oneYear/SilverOneYearSection';
import GoldOneYearSection from '../../iitJamPrice/gold/oneYear/GoldOneYearSection';
import PlatinumOneYearSection from '../../iitJamPrice/platinum/oneYear/PlatinumOneYearSection';

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