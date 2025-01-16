import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Drgallery from "./Drgallery";
import Heading from "./Heading";
import { headList1 } from "../constants/titlefile";


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

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -100, y: 0 }, // Fade from left
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Clinicinfo = () => {
  
  return (
    <Grid
    container
    spacing={0}
    alignItems="center"
    justifyContent="center"
    id="aboutus"
    sx={{py:8 }}
  >


    <Grid item xs={12} md={6} sx={{ p: 1 }}  alignItems="center"
    justifyContent="center">
          <motion.div
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Optionally only animate once
          >
            <Drgallery />
          </motion.div>
        </Grid>

        {/* Right Side (Text Content) */}
        <Grid item xs={12} md={6} textAlign="justify" sx={{ p: 1 }}  alignItems="center"
    justifyContent="center">
        <motion.div
  className="textcontainer"
  variants={fadeUpVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>

<Typography
    variant="h1"
    sx={{
        // fontSize: { xs: 27, md: 33 },
        fontWeight: "600",
      

    }}
>
Welcome to Dr. Dombe's Dental Clinic

</Typography>
<Typography
    component="h1"
    sx={{
        fontSize: { sm: 18, md: 20 },
        fontWeight: "400",
        color: 'primary.light',
        pb:1

    }}
>
Exceptional care and innovative solutions for your dental needs.

</Typography>

            <Typography
            
              style={{
                marginTop: 4,
                marginBottom: 0,
                marginRight:2
               
              }}
            >
             Dr. Dombe's Dental Clinic in Thergaon, Pune, is dedicated to providing exceptional dental care with a focus on patient comfort and satisfaction. Founded by Dr. Sagar R. Dombe, a distinguished orthodontist with extensive experience, the clinic offers a wide range of services, including aligners, braces, implants, full mouth rehabilitation (FMR), and digital smile design (DSD). 

              <br /><br/>
              As India’s first in-house aligner manufacturer, the clinic has been utilizing advanced digital technology since 2017 to provide high-quality orthodontic solutions. Under Dr. Dombe's expert guidance, a recognized international speaker on aligner therapy and a key opinion leader for 3Shape, patients receive exceptional care tailored to their specific needs.

              <br /><br/>
             <b> In-House Aligner Manufacturing: </b>Offers affordable Aligner treatment options compared to other clinics.


            </Typography>
          </motion.div>
          
        </Grid>
        
      </Grid>
    // </Container>
  );
};

export default Clinicinfo;
