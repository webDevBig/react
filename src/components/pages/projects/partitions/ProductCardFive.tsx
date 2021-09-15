import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import LinearProgress from '@material-ui/core/LinearProgress';

function ProductCardFive() {
  return (
    <>
      <Link to='/project-details' className='mainprobx'>
        <Box className='card_head'>
          <Box className='card_img'>
            <Box component='img' src='/images/card_img.png' alt='' />
          </Box>
          <Box className='card_ttl'>
            <Typography component='h3'>Privi Trax (Gold+)</Typography>
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
            <Box className='chipbx chipbx_cls'>
              <BlockOutlinedIcon />
              Closed
            </Box>
            <br />
            <Box className='chipbx'>BUSD</Box>
          </Box>
        </Box>
        <Typography component='p' className='card_pp'>
          The New Era of Music Streaming. A decentralized Spotify meets Axie
          Infinity.
        </Typography>
        <Box className='card_mmdl'>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography component='label'>Swap rate</Typography>
              <Typography component='h4'>1 BUSD = 28.57 TRAX</Typography>
            </Grid>
            <Grid item xs={3} className='text-center'>
              <Typography component='label'>Cap</Typography>
              <Typography component='h4'>135000</Typography>
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
                Participants <span>2129</span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LinearProgress variant='determinate' value={100} />
            </Grid>
            <Grid item xs={6}>
              <Typography component='h6'>100.01%</Typography>
            </Grid>
            <Grid item xs={6} className='text-end'>
              <Typography component='h6'>135001/135000</Typography>
            </Grid>
          </Grid>
        </Box>
      </Link>
    </>
  );
}

export default ProductCardFive;
