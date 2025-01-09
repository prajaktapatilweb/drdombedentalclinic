import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Drgallery1 from './Drgallery1'
import { motion } from 'framer-motion';


export default function Awards() {
 // Define the fade-up animation variants
 const fadeUpVariants = {
  hidden: { opacity: 0, y: 100 },  // Initial state: invisible and below the viewport
  visible: { 
    opacity: 1, 
    y: 0,  // Moves up to its original position
    transition: {
      duration: 0.8, // Duration of the animation
      ease: 'easeInOut', // Easing function
    },
  },
};
  
         // Define the fade-left animation variants
         const fadeLeftVariants = {
          hidden: { opacity: 0, x: -100, y: 0 },  // Start from the left (-100px offset) and slightly below (50px down)
        visible: { 
          opacity: 1, 
          x: 0,  // Move to original position horizontally
          y: 0,  // Move to original position vertically
            transition: {
              duration: 0.8,  // Duration of the animation
              ease: 'easeInOut',  // Easing function for a smooth motion
        
            },
          },
        };
  return (
    <div>

<section id='awards' style={{backgroundColor:'white'}} >
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center',my:5}} spacing={0}>
                <Grid item xs={12} sm={6} md={5} order={2} >
                <motion.div
  className="textcontainer"
  variants={fadeUpVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>

                   <Drgallery1/>
                   </motion.div>
                </Grid>
                <Grid item xs={12} sm={6} md={7}>
                <motion.div
  className="textcontainer"
  variants={fadeLeftVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>
                    <Box sx={{ backgroundColor:{xs:'white',sm:'white',md:'primary.main'}, p: {xs:3,sm:3,md:5}, marginRight: 0 }}>

                        <Typography variant='h3' sx={{ color: 'primary.dark',fontSize:32 }}>
                        Our Accolades and Recognition
                        </Typography>
                        <br></br>
                         <Typography
             
              style={{
                marginTop: 4,
                marginBottom: 0,
                marginRight:2,
                textAlign:'justify',
                fontSize:'18px',
               
              }}
            >
                        At Abbad Dental Clinic and Implant Centre, our commitment to excellence in dental care has earned us prestigious awards that reflect our dedication to quality and patient satisfaction. We are proud to be recognized as <b>Health Stalwarts by Lokmat in 2024 </b> and to have received the <b>XL AWARD by Life XL in 2023</b>. Each accolade underscores our team's expertise and innovation. We take pride in these achievements and strive to continue exceeding your expectations with every visit.

                        </Typography>
                        <br></br>
                        {/* <Button variant='contained'>Read More <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button> */}
                    </Box>
                    </motion.div>
                </Grid>
            </Grid>
 
            </section>
    </div>
  )
}
