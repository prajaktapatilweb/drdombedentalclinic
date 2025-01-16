import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Grid, Hidden, Link, Container } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { Link as ScrollLink } from "react-scroll";
import { StyledButton } from "../styled-button";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Navbar from "./navbar";

function ResponsiveAppBar() {

    const contactno1 = " 9890840340";
    

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },

        animate: {
            x: 0,
            opacity: 1,
            transition: {

                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollbutton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }

    }

    return (
        
        <AppBar
            position="static"
            sx={{
                backgroundImage: { xs: `linear-gradient(rgba(1, 1, 1, 0.4), rgba(1, 1, 1, 0.4)), url("/images/nashikclinic/clinics9.webp")`, sm: `linear-gradient(rgba(1, 1, 1, 0.2), rgba(256, 256, 256, 0.2)), url("/images/nashikclinic/clinics9.webp")`, md:`linear-gradient(to right, rgba(1,1,1, 0.6) 10%, rgba(1,1,1, 0.4) 90%), url('/images/headerback1.jpg')`},
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition:'center',

            }}
        >
            <section style={{
                background: '#3a302e', width: '100%', padding: 0, borderRadius: 0,
            }}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            "@media (min-width: 768px)": {
                                flexDirection: "row",
                            },
                        }}
                    >
                        <Hidden mdDown>
                            <Box
                                sx={{
                                    width: "100%",
                                    // maxHeight: 300,
                                    "@media (min-width: 768px)": {
                                        width: "70%",
                                    },
                                }}
                            >
                                <IconButton aria-label="phone" style={{ color: 'white' }}>
                                    {" "}
                                    <CallTwoToneIcon />
                                </IconButton>

                                <Link href={`tel:${contactno1}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white', marginRight: 10 }}>
                                    9890840340

                                    </a>
                                </Link>


                                {/* <Link  href={`tel:${contactno2}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    9923708233

                                    </a>
                                </Link>{" "} */}
                                <IconButton aria-label="email" style={{ color: 'white' }}>
                                    <EmailTwoToneIcon />{" "}
                                </IconButton>
                                <Link
                                    href={`mailto:${'shape32aligners@gmail.com'}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    shape32aligners@gmail.com

                                    </a>
                                </Link>
                            </Box>
                        </Hidden>
                        <Box
                            sx={{
                                width: "100%",
                                textAlign: {
                                    xs: "center",
                                    sm: "center",
                                    md: "right",
                                },
                                // textAlign: 'right',
                                "@media (min-width: 768px)": {
                                    width: "30%",
                                },
                            }}
                        >
                            <IconButton aria-label="facebook">
                                {" "}
                                <a
                                    href="https://www.facebook.com/abbaddentalclinicnashik/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="facebook"
                                >
                                    <FacebookIcon sx={{ color: "white" }} />{" "}
                                </a>
                            </IconButton>

                            <IconButton aria-label="instagram">
                                <a
                                    href="https://www.instagram.com/sagardombe/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="instagram"
                                >
                                    <InstagramIcon
                                        sx={{ color: "white", Width: 30, Height: 30 }}
                                    ></InstagramIcon>
                                </a>
                            </IconButton>

                            <IconButton aria-label="youtube">
                                <a
                                    href=" https://www.youtube.com/channel/UCxI-_YXru2XT7vwf2PZC9hg"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="youtube"
                                >
                                    <YouTubeIcon sx={{ color: "white" }}></YouTubeIcon>
                                </a>
                            </IconButton>
                            {/* <IconButton aria-label="justdial">
                                <a
                                    href="https://www.justdial.com/Nashik/Abbad-Dental-Clinic-Implant-Center-Opp-BYK-College-Next-to-Fastrack-Showroom-College-Road/0253PX253-X253-221218231157-S3D4_BZDET"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="linkedin"
                                >
                                    <Image src="/images/jd.png" width={20} height={20} ></Image>



                                </a>
                            </IconButton>
                            <IconButton aria-label="linktree">
                                <a
                                    href="https://linktr.ee/AbbadDentalClinic"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="linkedin"
                                >
                                    <Image src="/images/icons/linktree.webp" width={20} height={20} ></Image>



                                </a>
                            </IconButton> */}
                        </Box>
                    </Box>
                </Container>
            </section>

            <section style={{
                padding: 3,
                background: 'rgba( 255, 255, 255, 1)',
                boxShadow: ' 0 10px 10px 1px #0000001f',
                backdropFilter: 'blur( 8px )',
                borderBottom: '1px solid #ffffff36',
                display: 'flex'
            }}>
                <Navbar />
            </section>
            <Box sx={{ my: 18 }}>
                {/* <Container> */}
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    textAlign="left"
                >
                    <Grid item xs={12} md={8} sx={{ px: {xs:2,sm:3,md:7},py:3, mt: { xs: -7, sm: -7, md: -7 } }}>
                        <motion.div className="textcontainer" variants={textVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <Box sx={{
                                position: "relative",
                                fontSize: { xs: '32px', sm: '30px', md: '38px' },
                                letterSpacing: 1.5,

                                color: { xs: 'white', sm: 'white', md: "white" },
                                lineHeight: 1.2,
mb:-2,
                                // '-webkit-text-stroke': '1px #28282B',


                            }}>
                                <motion.h2 variants={textVariants} style={{ fontFamily: "Inter, sans-serif", fontWeight: '800', }} >

                                Transform Your Smile with Expert Care

                                </motion.h2>
                            </Box>
                            <Hidden smDown>
                                <Typography
                                    variant="p"
                                    sx={{ color: "white", lineHeight: 0, fontSize: 23, lineHeight: 1.2, }}
                                >
                                 Trust Dr. Sagar Dombe for bespoke dental treatments in Thergaon, Pune.

                                </Typography>
                            </Hidden>
                            <Box sx={{ "& button": { mt: 3, mb: 7, } }}>
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
                                            fontSize: 22,

                                            borderRadius: 10,
                                            backgroundColor: 'white',
                                            fontWeight:600,
                                         

                                            color: "#795442",
                                        }}
                                    >
                                        Enquire Now
                                    </StyledButton>
                                </ScrollLink>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    </Grid>
                </Grid>
                {/* </Container> */}
            </Box>
        </AppBar>
    );
}
export default ResponsiveAppBar;
