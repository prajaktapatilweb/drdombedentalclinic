import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';


const Footer = () => {
  const contactno1 = "9713435111";
  const contactno2 = "9923708277";


  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3a302e",
        py: 9,
        px:3,
        color: "primary.contrastText",
      }}
    >

      <Container sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: { xl: 1300 } }}>
        <Grid container spacing={0} alignItems='center' justifyContent='center'>
          <Grid container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
          
            <Grid item xs={12} sm={12} md={4} alignItems='center' justifyContent='center' sx={{p:3}}>

              <Box sx={{ mb: { xs: 3, md: 0 } }}>
                <Image src="/images/logodrdombe1.jpg" width={180} height={100} style={{marginBottom:'7px', filter:'drop-shadow(0px 1px 0px #ffffff)'}} ></Image>


                <Typography  sx={{ letterSpacing: 1, mb: 2,textAlign:'justify' }}>
                Searching for the best dentist in Nashik? Dr. Nikhil and Dr. Leena Abbad offer top-quality dental care with a focus on patient comfort. From routine check-ups to advanced treatments, their expertise ensures your smile stays healthy and radiant. Book your appointment today!


                </Typography>


              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} alignItems='center' justifyContent='center' textAlign='center' sx={{p:3}}>


              <Typography
                sx={{
                  color: "white",
                  // mb: { xs: 1, md: 2 },
                  fontSize: { xs: 34, md: 25 },
                  fontWeight: "600",
                  fontFamily: "Open Sans, sans-serif",
                  display: 'inline-block', // Ensures the border only goes as wide as the text
                  borderBottom: '1px solid lightgrey', // Border only below the text
                  mb: 3

                }}
              >
                Clinic 1
              </Typography>

              <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                <Grid item xs={1} md={1} >
                  <AddLocationIcon sx={{ fontSize: 25, color: 'primary.main' }} />
                </Grid>
                <Grid item xs={11} md={11} sx={{ textAlign: 'justify', mb: 2 }}>
                101, 102, 103 & 106, Sadguru Sai Paradise, Rahatani-Link Road, Thergaon, Pimpri-Chinchwad, Pune, Maharashtra 411033
                </Grid>
              </Grid>
              <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                <Grid item xs={1} md={1} >
                  <MoreTimeIcon sx={{ fontSize: 23, marginRight: 1, color: 'primary.main' }} />
                </Grid>
                <Grid item xs={11} md={11} sx={{ textAlign: 'justify', mb: 2 }}>
                  <b>Monday to Saturday:</b> 10 AM to 09 PM<br></br>
                  <b>Sunday:</b> 10 AM to 01 PM
                </Grid>
              </Grid>
              <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                <Grid item xs={1} md={1} >
                  <PhoneInTalkIcon sx={{ fontSize: 23, marginRight: 1, color: 'primary.main' }} />

                </Grid>
                <Grid item xs={11} md={11} sx={{ textAlign: 'justify' }}>
                <Link href={`tel:${contactno1}`} target="_blank" style={{marginRight:5,color:'white',textDecoration:'underline'
                }}>
                                    {/* <a className="nav-link-inner--text" style={{ color: 'white' }}> */}
                                        9713435111,

                                    {/* </a> */}
                                </Link>
                                <Link href={`tel:${contactno2}`} target="_blank" style={{marginRight:5,color:'white',textDecoration:'underline'}}>
                                    9923708277

                                </Link>{" "}

              
                </Grid>
                <Grid item xs={12} md={12} sx={{ textAlign: 'justify',p:3 }}>
                 <Link variant="contained" href='https://maps.app.goo.gl/YXgsozYox5TPQDqi7'  style={{backgroundColor:'#305b9f',color:'white',padding:10,borderRadius:5}}>Get Directions On Map</Link>
                  </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} alignItems='center' justifyContent='center' textAlign='center' sx={{p:3}} >
              <Typography
                sx={{
                  color: "white",
                  // mb: { xs: 1, md: 2 },
                  fontSize: { xs: 34, md: 25 },
                  fontWeight: "600",
                  fontFamily: "Open Sans, sans-serif",
                  display: 'inline-block', // Ensures the border only goes as wide as the text
                  borderBottom: '1px solid lightgrey', // Border only below the text
                  mb: 3

                }}
              >
                Clinic 2
              </Typography>
              <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                <Grid item xs={1} md={1} >
                  <AddLocationIcon sx={{ fontSize: 25, color: 'primary.main' }} />
                </Grid>
                <Grid item xs={11} md={11} sx={{ textAlign: 'justify', mb: 2 }}>
                101, 102, 103 & 106, Sadguru Sai Paradise, Rahatani-Link Road, Thergaon, Pimpri-Chinchwad, Pune, Maharashtra 411033

                </Grid>
              </Grid>
              <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                <Grid item xs={1} md={1} >
                  <MoreTimeIcon sx={{ fontSize: 23, marginRight: 1, color: 'primary.main' }} />
                </Grid>
                <Grid item xs={11} md={11} sx={{ textAlign: 'justify', mb: 2 }}>
                  <b>Monday to Saturday:</b> 10 AM to 08:30 PM<br></br>
                  <b>Sunday:</b> 10 AM to 03 PM
                </Grid>
              </Grid>
              <Grid container alignItems='center' justifyContent='center' textAlign='center'>
                <Grid item xs={1} md={1} >
                  <PhoneInTalkIcon sx={{ fontSize: 23, marginRight: 1, color: 'primary.main' }} />

                </Grid>
                <Grid item xs={11} md={11} sx={{ textAlign: 'justify' }}>
                <Link href={`tel:${2532507965}`} target="_blank" style={{marginRight:5,color:'white',textDecoration:'underline'}}>


                  0253 2507965,
                  </Link>
                  <Link href={`tel:${9923708233}`} target="_blank" style={{marginRight:5,color:'white',textDecoration:'underline'}}>

                   9923708233
                   </Link>
                </Grid>
                <Grid item xs={12} md={12} sx={{ textAlign: 'justify',p:3 }}>
                 <Link variant="contained" href='https://maps.app.goo.gl/Vh1Q3igrYELDUVDDA'  style={{backgroundColor:'#305b9f',color:'white',padding:10,borderRadius:5}}>Get Directions On Map</Link>
                  </Grid>

              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} md={12}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Site Links
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#" className="footermenu">
                Home
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#aboutus" className="footermenu">
                About
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#treatments" className="footermenu">
                Treatments
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#testimonials" className="footermenu">
                Testimonials
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#gallery" className="footermenu">
                Gallery
              </Link>
            </Typography>
          
          
</Grid> */}


          <Grid item xs={12} sx={{ textAlign: 'center' }}>

            {/* Designed by <b>Prajakta Bhushankumar Patil</b> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
