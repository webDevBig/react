import React from 'react'
import { Box, Typography, Grid} from "@material-ui/core";
import { Container } from "react-bootstrap";

function CrossChainSupport() {
    return (
        <>
            <Box className="crsscnsprt_sc defpddng">
                <Container>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} className="text-center">
                            <Box className='def_h3' data-aos="fade-zoom-in" data-aos-duration="1400">
                                <Typography component="h3">Multi-Chain Support</Typography>
                                <Box className="h3line" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} className="text-center">
                            <Box component="img" src="/images/crcn_img01.png" alt="" data-aos="zoom-out" data-aos-duration="1800"/>
                            <Box component="img" src="/images/crcn_img02.png" alt="" data-aos="zoom-out" data-aos-duration="1800"/>
                            <Box component="img" src="/images/crcn_img03.png" alt="" data-aos="zoom-out" data-aos-duration="1800"/>
                            <Box component="img" src="/images/crcn_img04.png" alt="" data-aos="zoom-out" data-aos-duration="1800"/>
                            <Box component="img" src="/images/crcn_img05.png" alt="" data-aos="zoom-out" data-aos-duration="1800"/>
                            <Box component="img" src="/images/crcn_img06.png" alt="" data-aos="zoom-out" data-aos-duration="1800"/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default CrossChainSupport
