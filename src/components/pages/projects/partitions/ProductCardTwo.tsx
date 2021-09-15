import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import WatchLaterIcon from '@material-ui/icons/WatchLaterOutlined';
import LinearProgress from '@material-ui/core/LinearProgress';

function ProductCardTwo() {
  return (
    <>
      <Link to='/project-details' className='mainprobx'>
        <Box className='card_head'>
          <Box className='card_img'>
            <Box component='img' src='/images/card_img_02.png' alt='' />
          </Box>
          <Box className='card_ttl'>
            <Typography component='h3'>ETHPad (Gold+)</Typography>
            <Box className='crdscl'>
              <Box className='crdscl_ic'>
                <Box component='img' src='/images/earth_ic.svg' />
              </Box>
              <Box className='crdscl_ic'>
                <Box component='img' src='/images/twttr_ic.svg' />
              </Box>
              <Box className='crdscl_ic'>
                <Box component='img' src='/images/tlgrm_ic.svg' />
              </Box>
              <Box className='crdscl_ic'>
                <Box component='img' src='/images/dcmnt_ic.svg' />
              </Box>
            </Box>
            <Box className='chipbx'>
              <WatchLaterIcon />
              In Progress
            </Box>
            <br />
            <Box className='chipbx'>BUSD</Box>
          </Box>
        </Box>
        <Typography component='p' className='card_pp'>
          The FIRST deflationary launchpad on Ethereum, inspired by EIP-1559.
        </Typography>
        <Box className='card_mmdl'>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography component='label'>Swap rate</Typography>
              <Typography component='h4'>1 BUSD = 666.66 ETHPAD</Typography>
            </Grid>
            <Grid item xs={3} className='text-center'>
              <Typography component='label'>Cap</Typography>
              <Typography component='h4'>175000</Typography>
            </Grid>
            <Grid item xs={3} className='text-end'>
              <Typography component='label'>Access</Typography>
              <Typography component='h4'>Private</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className='card_prgrss'>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography component='label'>Progress</Typography>
            </Grid>
            <Grid item xs={6} className='text-end'>
              <Typography component='label'>
                Participants <span>3162</span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LinearProgress variant='determinate' value={90} />
            </Grid>
            <Grid item xs={6}>
              <Typography component='h6'>64.00%</Typography>
            </Grid>
            <Grid item xs={6} className='text-end'>
              <Typography component='h6'>112000/175000</Typography>
            </Grid>
          </Grid>
        </Box>
      </Link>
    </>
  );
}

export default ProductCardTwo;
