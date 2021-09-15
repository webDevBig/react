import React from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';

function RewardScFour() {
  return (
    <>
      <Box className='rwrd_sc_04'>
        <Box className='table_box'>
          
          <Box className='tbl_flxbx'>
            <Typography component='p'>
              <span className='wt_50'>CXPAD Price</span>
              <span className='tbl_algnrt'>0 USD</span>
            </Typography>
          </Box>
          <Box className='tbl_flxbx'>
            <Typography component='p'>
              <span className='wt_50'>Market Cap</span>
              <span className='tbl_algnrt'>0 USD</span>
            </Typography>
          </Box>
          <Box className='tbl_flxbx'>
            <Typography component='p'>
              <span className='wt_50'>Trading Volume 24h</span>
              <span className='tbl_algnrt'>0 USD</span>
            </Typography>
          </Box>
         
          <Box className='tbl_flxbx'>
            <Typography component='p'>
              <span className='wt_50'>LP Value</span>
              <span className='tbl_algnrt'>0 USD</span>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid item xs={12}>
        <Box className='bnnr_sc02'>
          {/* <Button variant='contained' color='primary' className='def_btn_prmr'>
            Apply for ido &nbsp;
          </Button> */}
          <a href="https://docs.google.com/forms/d/10HbgC6VgmWk48uUkjUhaOFfujlcG4L91V2PFMSAGaMA" target="_blank" className='def_btn_prmr def_btn_prmr_v2'>
            Buy CXPAD
          </a>
        </Box>
      </Grid>
    </>
  );
}

export default RewardScFour;
