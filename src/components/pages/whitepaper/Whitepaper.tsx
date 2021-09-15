import React from 'react'
import { Box, Typography, Button, Grid } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import { Element } from 'react-scroll'
import Slider from "react-slick";

function Whitepaper() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
            <Box className="whtppr">
                <Container>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={10}>
                            <Box className='def_h3'>
                                <Typography component='h3'>Whitepaper</Typography>
                                <Box className='h3line' />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="img" src="/images/sldr_img01.png" alt="" className="img-fluid whtprp_img" />
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="img" src="/images/sldr_img02.png" alt="" className="img-fluid whtprp_img" />
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="img" src="/images/sldr_img03.png" alt="" className="img-fluid whtprp_img" />
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="img" src="/images/sldr_img04.png" alt="" className="img-fluid whtprp_img" />
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="img" src="/images/sldr_img05.png" alt="" className="img-fluid whtprp_img" />
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="img" src="/images/sldr_img06.png" alt="" className="img-fluid whtprp_img" />
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="img" src="/images/sldr_img07.png" alt="" className="img-fluid whtprp_img" />
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="img" src="/images/sldr_img08.png" alt="" className="img-fluid whtprp_img" />
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="img" src="/images/sldr_img09.png" alt="" className="img-fluid whtprp_img" />
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="img" src="/images/sldr_img010.png" alt="" className="img-fluid whtprp_img" />
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="img" src="/images/sldr_img011.png" alt="" className="img-fluid whtprp_img" />
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="img" src="/images/sldr_img012.png" alt="" className="img-fluid whtprp_img" />
                        </Grid>
                        {/* <Grid item xs={10}>
                            <Slider {...settings}>
                                <Box>
                                    <Box component="img" src="/images/sldr_img01.jpg" alt="" className="img-fluid" />
                                </Box>
                                <Box>
                                    <Box component="img" src="/images/sldr_img02.jpg" alt="" className="img-fluid" />
                                </Box>
                                <Box>
                                    <Box component="img" src="/images/sldr_img03.jpg" alt="" className="img-fluid" />
                                </Box>
                                <Box>
                                    <Box component="img" src="/images/sldr_img04.jpg" alt="" className="img-fluid" />
                                </Box>
                                <Box>
                                    <Box component="img" src="/images/sldr_img05.jpg" alt="" className="img-fluid" />
                                </Box>
                                <Box>
                                    <Box component="img" src="/images/sldr_img06.jpg" alt="" className="img-fluid" />
                                </Box>
                                <Box>
                                    <Box component="img" src="/images/sldr_img07.jpg" alt="" className="img-fluid" />
                                </Box>
                            </Slider>
                        </Grid> */}
                    </Grid>
                </Container>
            </Box>
            
        </>
    )
}

export default Whitepaper
