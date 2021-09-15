import React from 'react';
import { Box, Typography } from '@material-ui/core';

function RewardScTwo({ totalPaid }) {
  return (
    <>
      <Box className='rwrd_sc_02'>
        <Typography component='h5'>Total paid to CXPAD holders:</Typography>
        <Typography component='h3'>
          <span>{totalPaid}</span> USDT
        </Typography>
        <Typography component='label'>~ $ {totalPaid}</Typography>
      </Box>
    </>
  );
}

export default RewardScTwo;
