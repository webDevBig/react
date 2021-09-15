import React from 'react'
import { Box, Typography, Grid} from "@material-ui/core";
import { Container } from "react-bootstrap";
import { Element } from 'react-scroll'
function AboutUs() {
    return (
        <>  
            <Element name="AboutUsSc">
                <Box className="about_sc defpddng">
                    <Container>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12} className="text-center">
                                <Box className='def_h3' data-aos="fade-zoom-in" data-aos-duration="1100" data-aos-delay="200">
                                    <Typography component="h3">About Us</Typography>
                                    <Box className="h3line" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={5} data-aos="fade-right" data-aos-duration="1100" data-aos-delay="600">
                                <Typography component="p" className="about_txt">Coinxpad will empower crypto projects with the ability to distribute tokens and raise liquidity.</Typography>
                                <Typography component="p" className="about_txt frstlttr_bg">We aim to create a safe destination for small/medium/big presale investors and early phase projects.</Typography>
                                <Typography component="p" className="about_txt">Investors benefit from exclusive access to safe, innovative projects and rewarding investments on every blockchain.</Typography>
                                <Typography component="p" className="about_txt">Projects benefit from our partnership, providing complimentary audits by our team of blockchain experts and developers and a dedicated community ready to back them.</Typography>
                                <Typography component="p" className="about_txt">Only the best projects and teams who meet our strict evaluations will be allowed to raise funds with Coinxpad launchpad platform.</Typography>
                                <Typography component="p" className="about_txt">Investors benefit from our approach by having access to secure, trustworthy projects that have the highest chance to succeed.</Typography>
                            </Grid>
                            <Grid item xs={12} md={5} className="about_imgsc" data-aos="fade-left" data-aos-duration="1100" data-aos-delay="1000">
                                <Box component="img" src="/images/about_img.png" className="img-fluid" alt="" />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Element>
        </>
    )
}

export default AboutUs