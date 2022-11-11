import FirstAds from '../AdsSection/FirstAds/FirstAds';
import HomeLeadSection from '../Leadsection/HomeLeadSection';
import HeroSports from './HeroSports';
import HomeAllBd from './HomeAllBd';
import HomeEntertainmentSection from './HomeEntertainmentSection';
import HomeFinance from './HomeFinance';
import HomeLifestyleSection from './HomeLifestyleSection';
import HomeMultiSection from './HomeMultiSection';

const HomePage = () => {
    return (
        <>
            <FirstAds/>
            <HomeLeadSection/>
            <HomeAllBd/>
            <HomeFinance/>
            <HeroSports/>
            <HomeEntertainmentSection/>
            <HomeLifestyleSection/>
            <HomeMultiSection/>
        </>
    );
};

export default HomePage;