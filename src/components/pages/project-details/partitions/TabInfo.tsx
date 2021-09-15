import React from 'react';
import { Box, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { Tabs, Tab } from 'react-bootstrap';
function TabInfo() {
  return (
    <>
      <Grid
        container
        justifyContent='center'
        spacing={2}
        sx={{ py: { lg: 10, xs: 5 } }}
      >
        <Grid item xs={12} md={11}>
          <Tabs
            defaultActiveKey='tab_one'
            id='ProjectTab'
            className='mb-3 pjcttbs'
          >
            <Tab eventKey='tab_one' title='Project details'>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={6}>
                  <Box className='table_box'>
                    <Typography component='h3'>Pool information</Typography>
                    <Box className='tbl_flxbx'>
                      <Typography component='p'>
                        <span className='wt_50'>Opens</span>
                        <span className='tbl_algnrt'>
                          {/* 2021-08-10 08:00:00 UTC */}
                        </span>
                      </Typography>
                    </Box>
                    <Box className='tbl_flxbx'>
                      <Typography component='p'>
                        <span className='wt_50'>FCFS Opens</span>
                        <span className='tbl_algnrt'>
                          {/* 2021-08-10 12:45:00 UTC */}
                        </span>
                      </Typography>
                    </Box>
                    <Box className='tbl_flxbx'>
                      <Typography component='p'>
                        <span className='wt_50'>Closes</span>
                        <span className='tbl_algnrt'>
                          {/* 2021-08-10 14:00:00 UTC */}
                        </span>
                      </Typography>
                    </Box>
                    <Box className='tbl_flxbx'>
                      <Typography component='p'>
                        <span className='wt_50'>Swap Rate</span>
                        <span className='tbl_algnrt'>
                          {/* 1 BUSD = 28.5714 TRAX */}
                        </span>
                      </Typography>
                    </Box>
                    <Box className='tbl_flxbx'>
                      <Typography component='p'>
                        <span className='wt_50'>Cap</span>
                        <span className='tbl_algnrt'>
                          {/* 135000 BUSD */}
                        </span>
                      </Typography>
                    </Box>
                    <Box className='tbl_flxbx'>
                      <Typography component='p'>
                        <span className='wt_50'>Total Users Participated</span>
                        <span className='tbl_algnrt'>
                          {/* 2129 */}
                        </span>
                      </Typography>
                    </Box>
                    <Box className='tbl_flxbx'>
                      <Typography component='p'>
                        <span className='wt_50'>Total Funds Swapped</span>
                        <span className='tbl_algnrt'>
                          {/* 135019.7490 BUSD */}
                        </span>
                      </Typography>
                    </Box>
                    <Box className='tbl_flxbx'>
                      <Typography component='p'>
                        <span className='wt_50'>Access Type</span>
                        <span className='tbl_algnrt'>
                          {/* Private */}
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Box className='table_box'>
                    <Typography component='h3'>Token information</Typography>
                    <Box className='tbl_flxbx'>
                      <Typography component='p'>
                        <span className='wt_50'>Name</span>
                        <span>
                          {/* Privi Trax (Gold+) */}
                        </span>
                      </Typography>
                    </Box>
                    <Box className='tbl_flxbx'>
                      <Typography component='p'>
                        <span className='wt_50'>Token Symbol</span>
                        <span>
                          {/* TRAX */}
                        </span>
                      </Typography>
                    </Box>
                    <Box className='tbl_flxbx'>
                      <Typography component='p'>
                        <span className='wt_50'>Total Supply</span>
                        <span>
                          {/* 100000000 */}
                        </span>
                      </Typography>
                    </Box>
                    <Box className='tbl_flxbx'></Box>
                    <Box className='tbl_flxbx'></Box>
                    <Box className='tbl_flxbx'></Box>
                    <Box className='tbl_flxbx'></Box>
                    <Box className='tbl_flxbx'></Box>
                  </Box>
                </Grid>
              </Grid>
            </Tab>
            <Tab eventKey='tab_two' title='Schedule'>
              <Box className="table_box">
                <Box className="tb_tbl">
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Round</TableCell>
                          <TableCell>Open</TableCell>
                          <TableCell>Closes</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>Allocation</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>FCFS - Prepare</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>FCFS - Start</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
              
            </Tab>
            <Tab eventKey='tab_three' title='Your Allocation'>
              <Box className="table_box">
                <Box className="tb_flx_bx">
                  <Box className="tb_tbl">
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>Allocation</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Claimed</TableCell>
                            <TableCell>Action</TableCell>
                          </TableRow>
                        </TableHead>
                        {/* <TableBody>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          
                        </TableBody> */}
                      </Table>
                    </TableContainer>
                  </Box>
                  <Button
                    variant='contained'
                    color='primary'
                    className='def_btn_prmr'
                  >
                    + Add token to MetaMask
                  </Button>
                </Box>
              </Box>
              
            </Tab>
          </Tabs>
        </Grid>
      </Grid>
    </>
  );
}

export default TabInfo;
