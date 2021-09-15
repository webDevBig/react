import React from 'react'
import { Box, Typography, Button, Grid} from "@material-ui/core";
import { Tabs, Tab } from 'react-bootstrap';
import ProductCard from './ProductCard';
import ProductCardTwo from './ProductCardTwo';
import ProductCardThree from './ProductCardThree';
import ProductCardFour from './ProductCardFour';
import ProductCardFive from './ProductCardFive';
import ProductCardSix from './ProductCardSix';
import ProductCardSeven from './ProductCardSeven';

function ProjectsOpen() {
    return (
        <>
            <Tabs
                defaultActiveKey='tab_one'
                id='ProjectTab'
                className='mb-3 pjcttbs tab_one_v2'
            >
                <Tab eventKey='tab_one' title='Open Now'>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={12} sx={{ mt: {lg: 10, sm: 5} }}>
                            <Box className='def_h3'>
                                <Typography component="h3">Projects Open Now</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={11}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} className="text-center">
                                    <Typography component="h3" className="nprjctttl">No projects currently open</Typography>
                                </Grid>
                                {/* <Grid item xs={12} lg={6} className="cstmdflex">
                                    <ProductCard />
                                </Grid>        
                                <Grid item xs={12} lg={6} className="cstmdflex">
                                    <ProductCardTwo />
                                </Grid>         */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Tab>
                <Tab eventKey='tab_two' title='Upcoming'>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={12}>
                            <Box className='def_h3' sx={{ mt: {lg: 10, sm: 5} }}>
                                <Typography component="h3">Projects Coming Soon</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={11}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} lg={6} className="cstmdflex">
                                    <ProductCardThree />
                                </Grid>        
                                <Grid item xs={12} lg={6} className="cstmdflex">
                                    <ProductCardFour />
                                </Grid>      
                                <Grid item xs={12} lg={6} className="cstmdflex">
                                    <ProductCardSix />
                                </Grid>   
                                <Grid item xs={12} lg={6} className="cstmdflex">
                                    <ProductCardSeven />
                                </Grid>     
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className="text-center">
                            <Button variant="outlined" color="primary" className="def_btn_scndr min180">Load more</Button>
                        </Grid>
                        
                    </Grid>
                </Tab>
                <Tab eventKey='tab_three' title='Ended'>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={12}>
                            <Box className='def_h3' sx={{ mt: {lg: 10, sm: 5} }}>
                                <Typography component="h3">Projects Closed</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={11}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} className="text-center">
                                    <Typography component="h3" className="nprjctttl">No projects currently closed</Typography>
                                </Grid>
                                {/* <Grid item xs={12} lg={6} className="cstmdflex">
                                    <ProductCardFive />
                                </Grid>        
                                <Grid item xs={12} lg={6} className="cstmdflex">
                                    <ProductCardFive />
                                </Grid>  */}
                                {/* <Grid item xs={12} lg={6} className="cstmdflex">
                                    <ProductCardFive />
                                </Grid>        
                                <Grid item xs={12} lg={6} className="cstmdflex">
                                    <ProductCardFive />
                                </Grid>   
                                <Grid item xs={12} lg={6} className="cstmdflex">
                                    <ProductCardFive />
                                </Grid>        
                                <Grid item xs={12} lg={6} className="cstmdflex">
                                    <ProductCardFive />
                                </Grid>           */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Tab>
            </Tabs>


            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} md={11} className="text-center">
                    <Box className='def_h3 mb-2' sx={{ mt: 10, }}>
                        <Typography component="h3">Want to launch your project on CoinxPad?</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} className="text-center rwrds_sc_actn">
                    {/* <Button variant="contained" color="primary" className="def_btn_prmr">
                        Apply to Launch
                    </Button> */}
                    <a href="https://docs.google.com/forms/d/10HbgC6VgmWk48uUkjUhaOFfujlcG4L91V2PFMSAGaMA" target="_blank"className='def_btn_prmr def_btn_prmr_v2 w-auto'>
                        Apply to Launch
                    </a>
                </Grid>
            </Grid>
        </>
    )
}

export default ProjectsOpen
