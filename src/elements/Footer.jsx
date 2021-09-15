import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <>
      <Box className='footer'>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} className='text-center tp_fftr'>
              <Link
                to='FeaturesSc'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Features
              </Link>
              <Link
                to='AboutUsSc'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About Us
              </Link>
              <Link
                to='AuditSc'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Audit
              </Link>
              <Link
                to='KYCSc'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                KYC
              </Link>
              <Link
                to='TokenomicsSc'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Tokenomics
              </Link>
              <Link
                to='RoadmapSc'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Roadmap
              </Link>
              <Link
                to='FAQSc'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                FAQ
              </Link>
              <Link
                to='Whitepaper'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Whitepaper
              </Link>
            </Grid>
            <Grid item xs={12} className='text-center'>
              <Box className='bnnr_sc03'>
                <a href='https://twitter.com/coinxpad' className='scla_ic' target="_blank">
                  <Box component='img' src='/images/twttr_ic.svg' />
                </a>
                <a href='https://t.me/Coinxpad'className='scla_ic' target="_blank">
                  <Box component='img' src='/images/tlgrm_ic.svg' />
                </a>
                <a href='mailto:support@coinxpad.io' className='scla_ic'>
                  <Box component='img' src='/images/email_ic.svg' />
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} className='text-center btmftr'>
              <a href='/privacy'>Privacy Policy</a>
              <a href='/terms'>Terms of Use</a>
              <Typography component='p'>
                © All rights reserved by CoinxPad
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
