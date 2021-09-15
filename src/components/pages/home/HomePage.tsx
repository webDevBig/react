import React from 'react'
import { Box} from "@material-ui/core";
import AboutUs from './partitions/AboutUs'
import BannerSection from './partitions/BannerSection'
import CrossChainSupport from './partitions/CrossChainSupport'
import RewardsDapp from './partitions/RewardsDapp';
import LaunchpadDapp from './partitions/LaunchpadDapp';
import Tokenomics from './partitions/Tokenomics';
import RoadMap from './partitions/RoadMap';
import Faq from './partitions/Faq';
import EDMVettingProcess from './partitions/EDMVettingProcess';
import Team from './partitions/Team';

function HomePage() {
    return (
        <>
            <Box className="mddl_bg">
                <BannerSection />
                <EDMVettingProcess />
                <CrossChainSupport />
                <AboutUs />
                <Team />
                <RewardsDapp />
                <LaunchpadDapp />
                <Tokenomics />
                <RoadMap />
                <Faq />
                
            </Box>
            
        </>
    )
}

export default HomePage
