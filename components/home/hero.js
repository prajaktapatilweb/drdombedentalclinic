import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '../styled-button';
import { PlayArrow } from '@mui/icons-material'
import Hidden from '@mui/material/Hidden';
import Contact from './Contact'
import Herocontact from './Herocontacts'
import Herocontacts from './Herocontacts'
import Countdown from './Countdown'
import Image from 'next/image'


const HomeHero = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <>
      <Box  sx={{
                backgroundImage: `url("/images/hero3.png")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyItems: "center",
            }}>
                {/* <Container> */}
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                >
                    <Grid item xs={12} md={12}>
                        <Box>
                            <Typography
                                variant="p"
                                sx={{ color: "white", lineHeight: 1.6, fontSize: 23 }}
                            >
                                {" "}
                                Welcome to Dynamic Dental Care
                            </Typography>
                            <Typography
                                component="h2"
                                sx={{
                                    // width: { md: 850 },
                                    position: "relative",
                                    fontSize: { xs: 35, md: 40, lg: 40 },
                                    mb: { xs: 3, sm: 2 },
                                    letterSpacing: 1.5,
                                    fontWeight: "bold",
                                    color: "white",
                                    lineHeight: 1.5,
                                }}
                            >
                                {" "}
                                Your Journey to Dental Wellness Starts Here!
                            </Typography>
                        <Hidden mdDown>

                            <Typography
                                component="span"
                                sx={{
                                    fontSize: "18px",

                                    fontWeight: 400,
                                    position: "relative",

                                    "& svg": {
                                        position: "absolute",
                                        top: -7,
                                        right: -20,
                                        width: { xs: 22, md: 27 },
                                        height: "auto",
                                    },
                                }}
                            >
                               Step into Dynamic Dental Care and Implant Centre, your premier destination for top-tier dental solutions in Airoli, and Thane West.<br></br> Experience personalized care and cutting-edge techniques for radiant smiles.
                            </Typography>
                            </Hidden>

                            <Box sx={{ "& button": { mt: 4, mb: 7 } }}>
                                <ScrollLink
                                    to="contactform"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={350}
                                >
                                    <StyledButton
                                        color="white"
                                        size="large"
                                        variant="outlined"
                                        sx={{
                                            mb: { xs: 3, sm: 0, md: 0 },
                                            fontSize: 17,
                                            border: "1px solid",
                                            borderRadius: 1,
                                            background:'#70cad2',
                                            borderColor: "#70cad2",
                                            color: "#2b337d",
                                        }}
                                    >
                                        Enquire Now
                                    </StyledButton>
                                </ScrollLink>
                            </Box>
                            <Countdown />
                        </Box>
                    </Grid>
                </Grid>
                {/* </Container> */}
            </Box>
    </>
  )
}
export default HomeHero