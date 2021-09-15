import React from 'react'
import { Box, Typography, Button, Grid} from "@material-ui/core";
import { Container } from "react-bootstrap";
import { Element } from 'react-scroll'
import {Link} from 'react-router-dom'
function RewardsDapp() {
    return (
        <>
            <Element name="AuditSc">
                <Box className="rwrds_sc defpddng">
                    <Container>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12} className="text-center">
                                <Box className='def_h3'>
                                    <Typography component="h3">Rewards Dapp</Typography>
                                    <Box className="h3line" />
                                </Box>
                                <Typography component="p" className="sbttltxt_txt">You’ll receive USDT automatically in your wallet every 60 minutes, you can check all the statistics and rewards on the Rewards Dapp page.</Typography>
                            </Grid>
                            <Grid item xs={12} className="text-center">
                                <Box component="img" src="/images/rwrdfrm.jpg" className="img-fluid shdwwtmrgn" alt="" />
                            </Grid>
                            <Grid item xs={12} md={6} className="text-center rwrds_sc_actn">
                                {/* <Button variant="contained" color="primary" className="def_btn_prmr">
                                    Rewards Page
                                </Button> */}
                                <Link to="/rewards" className="def_btn_prmr def_btn_prmr_v2 w-auto">
                                    Rewards Page
                                </Link>
                            </Grid>
                            
                        </Grid>
                    </Container>
                </Box>
            </Element>
            
        </>
    )
}

export default RewardsDapp


