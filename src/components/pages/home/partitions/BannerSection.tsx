import React from 'react';
import { Box, Typography, Button, Grid } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import { Element } from 'react-scroll';
import CopyIcon from '@material-ui/icons/ContentCopy';
import { Link } from 'react-router-dom';
import { Parallax, Background } from "react-parallax";

const image2 =
  "../static/media/moon_bg.c19cd714.svg";
// const image2 =
//   "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";

function BannerSection() {
  return (
    <>
    {/* <Parallax bgImage={image2} strength={-300}> */}
      <Parallax className='bannersc' bgImage={image2} strength={-700} >
        <Container>
          <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={12}>
              <Box className='bnnr_sc01'>
                <Typography component='h1' data-aos="fade-zoom-in" data-aos-duration="2000">
                  CoinxPad is the first Cex / Dex Multi-chain IDO Launchpad
                </Typography>
                <Typography component='p' data-aos="fade-zoom-in" data-aos-delay="1200" data-aos-duration="2000">
                  CoinxPad is where you get access to the best new tokens before
                  they list on other centralized or decentralized exchanges.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className='bnnr_sc02' data-aos="fade-zoom-in" data-aos-delay="1700" data-aos-duration="2000">
                <Button
                  href='/projects'
                  variant='outlined'
                  color='primary'
                  className='def_btn_scndr'
                >
                  View all Projects
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  className='def_btn_prmr'
                >
                  Join CoinxPad Presale (Soon)&nbsp;
                  <Box
                    component='img'
                    src='/images/uncrplg.png'
                    alt=''
                    height='25px'
                  />
                </Button>
                <a href="https://docs.google.com/forms/d/10HbgC6VgmWk48uUkjUhaOFfujlcG4L91V2PFMSAGaMA" target="_blank"
                 
                  className='def_btn_thrd def_btn_thrd_a'
                >
                  Apply for IDO
                </a>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className='bnnr_sc03' data-aos="zoom-in" data-aos-delay="2100" data-aos-duration="2000">
                <a href='https://twitter.com/coinxpad' className='scla_ic' target="_blank">
                  <Box component='img' src='/images/twttr_ic.svg' />
                </a>
                <a href='https://t.me/Coinxpad' className='scla_ic' target="_blank">
                  <Box component='img' src='/images/tlgrm_ic.svg' />
                </a>
                <a href='mailto:support@coinxpad.io' className='scla_ic'>
                  <Box component='img' src='/images/email_ic.svg' />
                </a>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className='bnnr_sc04 trigger' data-aos="zoom-in" data-aos-duration="2000">
                <Box className='def_h3'>
                  <Typography component='h3'>Contract Address</Typography>
                  <Box className='h3line' />
                </Box>
                <Box className='addrssbx'>
                  <Typography component='label'>
                    {/* 0x361F3D81E9B249cFaFa7a047d9225c10323F10Bd */}
                    <span className="smtxt">(soon)</span>
                  </Typography>
                  <CopyIcon
                    onClick={() => {
                      navigator.clipboard.writeText(
                        '0x361F3D81E9B249cFaFa7a047d9225c10323F10Bd'
                      );
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className='clnt_bx'>
                <Box className="img_wt_cntnt" data-aos="fade-zoom-in" data-aos-duration="1400">
                  <Box component='img' src='/images/clnt_01.png' alt='' />
                </Box>
                <Box className="img_wt_cntnt" data-aos="fade-zoom-in" data-aos-duration="1400" data-aos-delay="400">
                  <Box component='img' src='/images/clnt_02.png' alt='' />
                </Box>
                <Box className="img_wt_cntnt" data-aos="fade-zoom-in" data-aos-duration="1400" data-aos-delay="800">
                  <Box component='img' src='/images/clnt_03.png' alt='' />
                  <Typography component="h6">(soon)</Typography>
                </Box>
                <Box className="img_wt_cntnt img_wt_cntnt_v2" data-aos="fade-zoom-in" data-aos-duration="1400" data-aos-delay="1200">
                  <Box component='img' src='/images/clnt_04.png' alt='' />
                  <Typography component="h6">(soon)</Typography>
                </Box>
                <Box className="img_wt_cntnt" data-aos="fade-zoom-in" data-aos-duration="1400" data-aos-delay="1600">
                  <Box component='img' src='/images/clnt_05.png' alt='' />
                </Box>
                
              </Box>
            </Grid>
            <Grid item xs={11} className='ftrs_sc'>
              <Element name='FeaturesSc'>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box className='def_h3'>
                      <Typography component='h3'>Features</Typography>
                      <Box className='h3line' />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} className='ftrinfoHover'>
              
                    <Box   className='ftrinfo' data-aos="fade-up" data-aos-duration="1100" >
                      <Box
                        component='img'
                        src='/images/ftr_ic01.png'
                        className='img-fluid'
                        alt=''
                      />
                      <Typography component='h4'>
                        5% redistributed in USDT
                      </Typography>
                      <Typography component='p'>
                        5% of every transaction is redistributed to all
                        holders. Hold $CXPAD tokens, earn USDT. A minimum of
                        200000 tokens is required in order to receive rewards.
                      </Typography>
                    </Box>
                  
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} className='ftrinfoHover'>
                    <Box className='ftrinfo' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
                      <Box
                        component='img'
                        src='/images/ftr_ic02.png'
                        className='img-fluid'
                        alt=''
                      />
                      <Typography component='h4'>
                        3% Auto Liquidity Pool
                      </Typography>
                      <Typography component='p'>
                        3% of every transaction contributes towards generating
                        liquidity that goes automatically into PancakeSwap.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} className='ftrinfoHover'>
                    <Box className='ftrinfo' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="600">
                      <Box
                        component='img'
                        src='/images/ftr_ic03.png'
                        className='img-fluid'
                        alt=''
                      />
                      <Typography component='h4'>2% Marketing</Typography>
                      <Typography component='p'>
                        2% of every transaction is allocated in marketing budget
                        and contributes to fuel platform developments and aggressive
                        promotions around all the blockchain space.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} className='ftrinfoHover'>
                    <Box className='ftrinfo' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="900">
                      <Box
                        component='img'
                        src='/images/ftr_ic04.png'
                        className='img-fluid'
                        alt=''
                      />
                      <Typography component='h4'>
                        USDT paid Automatically every 60 mins
                      </Typography>
                      <Typography component='p'>
                        You don't need to claim USDT. They will be sent
                        automatically to your wallet.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} className='ftrinfoHover'>
                    <Box className='ftrinfo' data-aos="fade-up" data-aos-duration="1100" >
                      <Box
                        component='img'
                        src='/images/ftr_ic05.png'
                        className='img-fluid'
                        alt=''
                      />
                      <Typography component='h4'>Cex-Dex Launchpad</Typography>
                      <Typography component='p'>
                        CoinxPad is your platform to find the best innovative
                        projects and investments across all the blockchain
                        networks.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} className='ftrinfoHover'>
                    <Box className='ftrinfo' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
                      <Box
                        component='img'
                        src='/images/ftr_ic06.png'
                        className='img-fluid'
                        alt=''
                      />
                      <Typography component='h4'>Liquidity Locked</Typography>
                      <Typography component='p'>
                        Most of the initial liquidity provided will be locked on
                        Unicrypt. The smart contract is fully audited by the German company "Solidproof".
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} className='ftrinfoHover'>
                    <Box className='ftrinfo' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="600">
                      <Box
                        component='img'
                        src='/images/ftr_ic07.png'
                        className='img-fluid'
                        alt=''
                      />
                      <Typography component='h4'>Smart Investing</Typography>
                      <Typography component='p'>
                        Our two-round system and max cap allocation for each IDO
                        allow all holders, small and large to have access to
                        high-quality projects.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} className='ftrinfoHover'>
                    <Box className='ftrinfo' data-aos="fade-up" data-aos-duration="1100" data-aos-delay="900">
                      <Box
                        component='img'
                        src='/images/ftr_ic08.png'
                        className='img-fluid'
                        alt=''
                      />
                      <Typography component='h4'>Safer Investing</Typography>
                      <Typography component='p'>
                        All the projects launched will be vetted and audited to
                        ensure Coinxpad investors more safety against scams and
                        rugs.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Element>
            </Grid>
          </Grid>
        </Container>
      {/* </Box> */}
      </Parallax>
    </>
  );
}

export default BannerSection;
