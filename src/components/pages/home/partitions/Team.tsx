import React from 'react'
import { Box, Typography, Grid} from "@material-ui/core";
import { Container } from "react-bootstrap";
function Team() {
    return (
        <>
            <Box className="team_sc defpddng">
                    <Container>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12} className="text-center">
                                <Box className='def_h3'>
                                    <Typography component="h3">Team</Typography>
                                    <Box className="h3line" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={10}>
                                
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={6} md={4} lg={2} className="text-center team_info">
                                        <Box component="img" src="/images/plnt_img01.png" className="img-fluid" alt="" />
                                        <Typography component="h4">Raph</Typography>
                                        <Typography component="p">CEO</Typography>
                                        <Typography component="h6">
                                            <Box component='img' src='/images/tlgrm_ic.svg' height="13px" />
                                            @Raph_coinxpad
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={2} className="text-center team_info">
                                        <Box component="img" src="/images/plnt_img02.png" className="img-fluid" alt="" />
                                        <Typography component="h4">Aj</Typography>
                                        <Typography component="p">CTO</Typography>
                                        <Typography component="h6">
                                            <Box component='img' src='/images/tlgrm_ic.svg' height="13px" />
                                            @Aj_coinxpad
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={2} className="text-center team_info">
                                        <Box component="img" src="/images/plnt_img03.png" className="img-fluid" alt="" />
                                        <Typography component="h4">Ken</Typography>
                                        <Typography component="p">CMO</Typography>
                                        <Typography component="h6">
                                            <Box component='img' src='/images/tlgrm_ic.svg' height="13px" />
                                            @Ken_coinxpad
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={2} className="text-center team_info">
                                        <Box component="img" src="/images/plnt_img04.png" className="img-fluid" alt="" />
                                        <Typography component="h4">Ravi</Typography>
                                        <Typography component="p">Senior Dev</Typography>
                                        {/* <Typography component="h6">
                                            <Box component='img' src='/images/tlgrm_ic.svg' height="13px" />
                                            @telegram_name
                                        </Typography> */}
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={2} className="text-center team_info">
                                        <Box component="img" src="/images/plnt_img05.png" className="img-fluid" alt="" />
                                        <Typography component="h4">Denis</Typography>
                                        <Typography component="p">Senior Dev</Typography>
                                        {/* <Typography component="h6">
                                            <Box component='img' src='/images/tlgrm_ic.svg' height="13px" />
                                            @telegram_name
                                        </Typography> */}
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={2} className="text-center team_info">
                                        <Box component="img" src="/images/plnt_img06.png" className="img-fluid" alt="" />
                                        <Typography component="h4">Bogdan</Typography>
                                        <Typography component="p">Designer</Typography>
                                        {/* <Typography component="h6">
                                            <Box component='img' src='/images/tlgrm_ic.svg' height="13px" />
                                            @telegram_name
                                        </Typography> */}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
        </>
    )
}

export default Team
