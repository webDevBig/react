import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';

function RewardScThree({
  yourHolding,
  USDTYou,
  lastPayout,
  pendingPayout,
  position,
}) {
  return (
    <>
      <Box className='rwrd_sc_03'>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Box className='rwrd_sc_03_in'>
              <Box component='img' src='/images/wallet_ic.png' alt='' />
              <Box className='rw_sc3_info'>
                <Typography component='h3'>
                  <span>Your Holdings:</span>
                  <Box className='txtprmr'>{yourHolding}</Box>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box className='rwrd_sc_03_in'>
              <Box component='img' src='/images/money_ic.png' alt='' />
              <Box className='rw_sc3_info'>
                <Typography component='h3'>
                  <span>USDT to You:</span>
                  <Box className='txtprmr'>{USDTYou}</Box>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box className='rwrd_sc_03_in'>
              <Box component='img' src='/images/valid_ic.png' alt='' />
              <Box className='rw_sc3_info'>
                <Typography component='h3'>
                  <span>Last Payout Time:</span>
                  <Box className='txtprmr txtprmr_dblc'>
                    {new Date(lastPayout * 1000).toUTCString()}
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box className='rwrd_sc_03_in'>
              <Box component='img' src='/images/time_ic.png' alt='' />
              <Box className='rw_sc3_info'>
                <Typography component='h3'>
                  <span>Pending USDT Payout:</span>
                </Typography>
                <Typography component='h5'>
                  <span>{pendingPayout}</span> (~ ${pendingPayout}) USDT
                </Typography>
                <Typography component='label'>
                  <span>Position in queue:</span> {position}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default RewardScThree;
