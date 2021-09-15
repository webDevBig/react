import React from 'react'
import { Box, Typography, Grid} from "@material-ui/core";
import { Container } from "react-bootstrap";
import { Element } from 'react-scroll'

import Plx from 'react-plx';

const textData = [
    {
      start: 'self',
      duration: '350',
      properties: [
        {
          startValue: 70,
          endValue: -20,
          unit: 'px',
          property: 'translateX',

        }
      ],
      easing: [0.25, 0.1, 0.3, 2]
    }
  ];

function Tokenomics() {
    return (
        <>
            <Element name="TokenomicsSc">
                <Box className="tknmcs_sc defpddng">
                    <Container>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12} className="text-center">
                                <Box className='def_h3'>
                                    <Typography component="h3">Tokenomics</Typography>
                                    <Box className="h3line" />
                                </Box>
                            </Grid>
                            
                            <Grid item xs={12} md={6} className="tknmcs_rgt" >
                             <Plx className='' parallaxData={ textData } >
                                <Typography component="h4" ><span>Total Supply:</span> 100,000,000,000</Typography>
                                </Plx>
                                <Plx className='' parallaxData={ textData } >
                                <Typography component="h4"><span>Presale:</span> 50,000,000,000</Typography>
                                </Plx>
                                <Plx className='' parallaxData={ textData } >
                                <Typography component="h4" ><span>Liquidity:</span> 22,095,000,000</Typography>
                                </Plx>
                                <Plx className='' parallaxData={ textData } >
                                <Typography component="h4"  ><span>Burn:</span> 13,000,000,000</Typography>
                                </Plx>
                                <Plx className='' parallaxData={ textData } >
                                <Typography component="h4" ><span>Developement:</span> 5,000,000,000</Typography>
                                </Plx>
                                <Plx className='' parallaxData={ textData } >
                                <Typography component="h4" ><span>Research & Innovation:</span> 5,000,000,000</Typography>
                                </Plx>
                                <Plx className='' parallaxData={ textData } >
                                <Typography component="h4" ><span>Partnership:</span> 2,000,000,000</Typography>
                                </Plx>
                                <Plx className='' parallaxData={ textData } >
                                <Typography component="h4" ><span>Airdrops:</span> 2,000,000,000</Typography>
                                </Plx>
                                <Plx className='' parallaxData={ textData } >
                                <Typography component="h4" ><span>Unicrypt Fees:</span> 900,000,000</Typography>
                                </Plx>
                               
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box className="circle_pro">
                                    <Box component="img" src="/images/grph_img1.png" className="crclegrp_img" alt="" />
                                    <Box>
                                        <Typography component="h4">
                                            <span className="grdts clr01"></span>
                                            <span>50%</span>  
                                            Presale
                                        </Typography>
                                        <Typography component="h4">
                                            <span className="grdts clr02"></span>  
                                            <span>22.1%</span>  
                                            Liquidity
                                        </Typography>
                                        <Typography component="h4">
                                            <span className="grdts clr03"></span>  
                                            <span>13%</span>  
                                            Burn
                                        </Typography>
                                        <Typography component="h4">
                                            <span className="grdts clr04"></span>  
                                            <span>5%</span>  
                                            Development
                                        </Typography>
                                        <Typography component="h4">
                                            <span className="grdts clr05"></span>  
                                            <span>5%</span>  
                                            Research & Innovation
                                        </Typography>
                                        <Typography component="h4">
                                            <span className="grdts clr06"></span>  
                                            <span>2%</span>  
                                            Partnership
                                        </Typography>
                                        <Typography component="h4">
                                            <span className="grdts clr07"></span>  
                                            <span>2%</span>  
                                            Airdrops 
                                        </Typography>
                                        <Typography component="h4">
                                            <span className="grdts clr08"></span>  
                                            <span>0.9%</span>  
                                            Unicrypt fees
                                        </Typography>
                                        {/* <Typography component="h4">
                                            <span className="grdts clr09"></span>  
                                            <span>1%</span>  
                                            YouTube
                                        </Typography>
                                        <Typography component="h4">
                                            <span className="grdts clr010"></span>  
                                            <span>1%</span>  
                                            TikTok
                                        </Typography> */}
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Element>
            
        </>
    )
}

export default Tokenomics
