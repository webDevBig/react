import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import LinearProgress from '@material-ui/core/LinearProgress';

function TopInfo() {
  //select
  const [blnc, setBlnc] = React.useState('1');
  const handleChangeOne = (event: any) => {
    setBlnc(event.target.value);
  };
  const [showPanel, togglePanel] = useState(false);
  return (
    <>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item xs={12} md={11}>
          <Grid container spacing={4} alignItems='flex-end'>
            <Grid item xs={12} lg={6}>
              <Box className='card_head card_head_v2'>
                <Box className='card_img'>
                  <Box component='img' src='/images/def_project.png' alt='' />
                </Box>
                <Box className='card_ttl'>
                  <Typography component='h3'>Project Name</Typography>
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
                  <br className='rspnv_br' />
                  <Box className='chipbx chipbx_cls'>
                    <BlockOutlinedIcon />
                    Closed
                  </Box>
                  <br />
                  <Box className='chipbx'>BUSD</Box>
                </Box>
              </Box>
              <Typography
                component='p'
                className='card_pp mt-4 mb-0 minheight0'
              >
                Description coming soon
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
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
            </Grid>
          </Grid>
          <Grid container spacing={4} alignItems='flex-end'>
            {showPanel && (
              <Grid item xs={12} lg={6} className='cnnctclps'>
                <Box className='ivestbx'>
                  <Typography component='label'>Amount to invest:</Typography>
                  <Box className='ivestbx_man'>
                    <Box className='rspnsv_flx'>
                      <Box className='inputgroup'>
                        <input
                          type='text'
                          placeholder='Enter Value'
                          className='inputfld'
                        />
                      </Box>
                      <FormControl className='def_select'>
                        <Select
                          value={blnc}
                          onChange={handleChangeOne}
                          displayEmpty
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value={1} disabled>
                            Select
                          </MenuItem>
                          <MenuItem value={2}>USDT</MenuItem>
                          <MenuItem value={3}>BUSD</MenuItem>
                          <MenuItem value={4}>BNB</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <Button
                      variant='contained'
                      color='primary'
                      className='def_btn_prmr'
                    >
                      Approve
                    </Button>
                  </Box>
                </Box>
              </Grid>
            )}

            <Grid item xs={12} lg={6} className='invstactn'>
              <Button
                variant='contained'
                color='primary'
                className='def_btn_prmr mt-3'
                onClick={() => togglePanel(!showPanel)}
              >
                Connect wallet
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default TopInfo;
