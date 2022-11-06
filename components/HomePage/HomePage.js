import FirstAds from '../AdsSection/FirstAds/FirstAds';
import HeroSports from './HeroSports';
import HomeAllBd from './HomeAllBd';
import HomeEntertainmentSection from './HomeEntertainmentSection';
import HomeFinance from './HomeFinance';
import HomeLeadSection from './HomeLeadSection';
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