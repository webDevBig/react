import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
function RewardScOne() {
  return (
    <>
      <Box className='rwrd_sc_01'>
        <Box
          component='img'
          src='/images/big_logo.png'
          className='bglogo'
          alt=''
        />
        {/* <Box className="rwrdform">
                    <Typography component="label">Please enter an address to see your dividends:</Typography>
                    <input type="text" placeholder="Wallet Address" className="rwrdfld" />
                    <Button variant="contained" color="primary" className="def_btn_prmr">
                        Check dividends
                    </Button>
                </Box> */}
      </Box>
    </>
  );
}

export default RewardScOne;
