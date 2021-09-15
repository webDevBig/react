import React from 'react'
import { Box, Typography, Button, Grid} from "@material-ui/core";
import { Container } from "react-bootstrap";
import { Element } from 'react-scroll'
import {Link} from 'react-router-dom'
function LaunchpadDapp() {
    return (
        <>
            <Element name="KYCSc">
                <Box className="rwrds_sc defpddng">
                    <Container>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12} className="text-center">
                                <Box className='def_h3'>
                                    <Typography component="h3">Launchpad Dapp</Typography>
                                    <Box className="h3line" />
                                </Box>
                                <Typography component="p" className="sbttltxt_txt">Our innovative Launchpad App allow the best projects and team to raise funds with Coinxpad, benefiting our community of investors.</Typography>
                            </Grid>
                            <Grid item xs={12} className="text-center">
                                <Box component="img" src="/images/lnpddrp_img.jpg" className="img-fluid shdwwtmrgn" alt="" />
                            </Grid>
                            <Grid item xs={12} md={6} className="text-center rwrds_sc_actn">
                                <Link to="/projects" className="def_btn_prmr def_btn_prmr_v2 w-auto">
                                    Open Launchpad Platform
                                </Link>
                            </Grid>
                            
                        </Grid>
                    </Container>
                </Box>
            </Element>
            
        </>
    )
}

export default LaunchpadDapp

