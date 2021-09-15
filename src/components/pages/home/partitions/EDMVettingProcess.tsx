import React from 'react'
import { Box, Typography, Button, Grid } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import Plx from 'react-plx';

const textData = [
    {
      start: 'self',
      duration: '270',
      properties: [
        {
          startValue: 200,
          endValue: 0,
          unit: 'px',
          property: 'translateY',
        },
      ],
    }
  ];
  const textData1 = [
    {
      start: 'self',
      duration: '250',
      properties: [
        {
          startValue: 300,
          endValue: 0,
          unit: 'px',
          property: 'translateY',
        },
      ],
    }
  ];
 

function EDMVettingProcess() {
    
    return (
        <>
            <Box className="edmvttnsc defpddng">
            <Plx className='StickyText sticky' >
                <Container>
                    <Grid container spacing={2} justifyContent='center'>
                    <Plx className='StickyText' parallaxData={ textData1 } >
            
                        <Grid item xs={11} >
                            <Box className='def_h3'>
                                <Typography component='h3'>CoinxPad “EDM” Vetting Process</Typography>
                                <Box className='h3line' />
                            </Box>
                        </Grid>
                   </Plx>
                   <Plx className='StickyText' parallaxData={ textData } >
                        <Grid item xs={11} className="edm_bx_one edm_cmn">
                            <Box component="img" src="/images/edm_l_01.png" alt="" className="edm_img" />
                            <Typography component="h6">
                                <span className="nmbr_txt">1</span>
                                We review and evaluate the <span className="edm_df_txt">Expertise</span> of the whole Team.
                            </Typography>
                        </Grid>
                        </Plx>
                        <Plx className='StickyText' parallaxData={ textData } >
                        <Grid item xs={11} className="edm_bx_two edm_cmn">
                            <Box component="img" src="/images/edm_l_02.png" alt="" className="edm_img" />
                            <Typography component="h6">
                                <span className="nmbr_txt">2</span>
                                We review and evaluate the <span className="edm_df_txt">Developments</span> plan and timeline. 
                            </Typography>
                        </Grid>
                        </Plx>
                        <Plx className='StickyText StickyText_last' parallaxData={ textData } >
                        <Grid item xs={11} className="edm_bx_three edm_cmn">
                            <Box component="img" src="/images/edm_l_03.png" alt="" className="edm_img" />
                            <Typography component="h6">
                                <span className="nmbr_txt">3</span>
                                We review and evaluate the <span className="edm_df_txt">Marketing Plan</span> of the project.
                            </Typography>
                        </Grid>
                        <Grid item xs={11} className="edm_bx_four edm_cmn">
                            <Typography component="h6">
                                <span>*</span>Only IF all the 3 points met our requirements we will go ahead with the listing process on our Launchpad.
                            </Typography>
                        </Grid>
                        </Plx>
                    </Grid>
                </Container>
                </Plx>
            </Box>
        </>
    )
}

export default EDMVettingProcess
