import React from 'react'
import { Box, Typography, Grid} from "@material-ui/core";
import { Container } from "react-bootstrap";
import { Element } from 'react-scroll'

import Plx from 'react-plx';

const textData1 = [
    {
      start: 'self',
      duration: '400',
      properties: [
        {
          startValue: -250,
          endValue: 0,
          unit: 'px',
          property: 'translateX',
        },
        {
          startValue: 200,
          endValue: 0,
          unit: 'px',
          property: 'translateY',
        },
        {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      }
      ],
    }
  ];
  const textData2 = [
    {
      start: 'self',
      duration: '500',
      properties: [
        {
          startValue: -250,
          endValue: 0,
          unit: 'px',
          property: 'translateX',
        },
        {
          startValue: 40,
          endValue: 0,
          unit: 'px',
          property: 'translateY',
        },
         {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      }
      ],
    }
  ];
  const textData3 = [
    {
      start: 'self',
      duration: '550',
      properties: [
        {
          startValue: -250,
          endValue: 0,
          unit: 'px',
          property: 'translateX',
        },
        {
          startValue: -10,
          endValue: 0,
          unit: 'px',
          property: 'translateY',
        },
         {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      }
      ],
    }
  ];
   const textData4 = [
    {
      start: 'self',
      duration: '450',
      properties: [
        {
          startValue: -250,
          endValue: 0,
          unit: 'px',
          property: 'translateX',
        },
        {
          startValue: -80,
          endValue: 0,
          unit: 'px',
          property: 'translateY',
        },
         {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      }
      ],
    }
  ];

function RoadMap() {
    return (
        <>
        <Element name="RoadmapSc">
            <Box className="rdmp_sc defpddng">
                <Container>
                    <Grid container spacing={2} >
                        <Grid item xs={12} className="text-center">
                            <Box className='def_h3'>
                                <Typography component="h3">Road Map</Typography>
                                <Box className="h3line" />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="img" src="/images/rdmp_tp_ln.png" className="img-fluid rdmp_tp_ln" alt="" />
                        </Grid>
                        
                        <Grid item xs={12} md={3}>
                        <Plx className='StickyPoint' parallaxData={ textData1 } >
                            <Box className="rdmp_info rdmp_info_v1">
                                <Box className="rdmp_info_v1_ln" />
                                <Box className="nmbr_bx">
                                    <Box className="nmbr_bx_inn">1</Box>
                                </Box>
                                <Typography component="h4">Q3 2021</Typography>
                                <ul className="rdmplst">
                                    <li>Logo and Brand Design</li>
                                    <li>BSC Contract Development</li>
                                    <li>Audit</li>
                                    <li>KYC</li>
                                    <li>CoinxPad Twitter Channel</li>
                                    <li>CoinxPad Telegram Group</li>
                                    <li>CoinxPad Chinese Telegram Group</li>
                                    <li>Presale</li>
                                    <li>CEX Launchpad </li>
                                    <li>Coingeko Listing</li>
                                    <li>Coinmarketcap Listing</li>
                                    <li>Community AMA</li>
                                    <li>Airdrop Distribution</li>
                                    <li>Listing on Pancakeswap</li>
                                    <li>Marketing Kickstart Campaigns</li>
                                    
                                </ul>
                            </Box>
                            </Plx>
                        </Grid>
                        
                        <Grid item xs={12} md={3}>
                        <Plx className='StickyPoint' parallaxData={ textData2 } >
                            <Box className="rdmp_info rdmp_info_v2">
                            <Box className="rdmp_info_v2_ln" />
                                <Box className="nmbr_bx">
                                    <Box className="nmbr_bx_inn">2</Box>
                                </Box>
                                <Typography component="h4">Q4 2021</Typography>
                                <ul className="rdmplst">
                                    <li>Website Upgrade</li>
                                    <li>Strategic Partnership</li>
                                    <li>Community Pools</li>
                                    <li>Marketing Progress </li>
                                    <li>DEX launchpad (like Unicrypt/Dxsale)</li>
                                </ul>
                            </Box>
                            </Plx>
                        </Grid>
                        <Grid item xs={12} md={3}>
                        <Plx className='StickyPoint' parallaxData={ textData3 } >
                            <Box className="rdmp_info rdmp_info_v3">
                                <Box className="rdmp_info_v3_ln" />
                                <Box className="nmbr_bx">
                                    <Box className="nmbr_bx_inn">3</Box>
                                </Box>
                                <Typography component="h4">Q1 2022</Typography>
                                <ul className="rdmplst">
                                    <li>Dex NFT Launchpad</li>
                                    <li>Liquidity Locker (Functionality to Lock Liquidity Tokens)</li>
                                    <li>2nd Audit</li>
                                    <li>Social Media Press Release Campaigns</li>
                                    <li>Cex Listing</li>
                                </ul>
                            </Box>
                            </Plx>
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <Plx className='StickyPoint' parallaxData={ textData4 } >
                            <Box className="rdmp_info rdmp_info_v4">
                                <Box className="nmbr_bx">
                                    <Box className="nmbr_bx_inn">4</Box>
                                </Box>
                                <Typography component="h4">Q2 2022</Typography>
                                <ul className="rdmplst">
                                    <li>Cex Launchpad UI/UX Redesign</li>
                                    <li>Dex Launchpad UI/UX Redesign</li>
                                    <li>Governance Functionality Pools</li>
                                </ul>
                            </Box>
                            </Plx>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Element>
        </>
    )
}

export default RoadMap
