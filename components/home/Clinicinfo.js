import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Drgallery from "./Drgallery";


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
    sx={{ fontFamily: '"Poppins", sans-serif',py:8 }}
  >


    <Grid item xs={12} sm={6} sx={{ p: 1 }}  alignItems="center"
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
              component="h3"
              sx={{
                fontSize: { xs: 27, md: 35 },
                fontWeight: "600",
                fontFamily: "League Spartan, sans-serif",
              
              }}
            >
             Dr. Dombe's Dental Clinic

              </Typography>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 21, md: 28 },
                fontWeight: "400",
                fontFamily: "League Spartan, sans-serif",
                color:'primary.light'
              
              }}
            >
              Home to the Best Dental Clinic in Nashik
            </Typography>
            <Typography
            
              style={{
                marginTop: 4,
                marginBottom: 0,
                marginRight:2
               
              }}
            >
              Welcome to Abbad Dental Clinic and Implant Center, where you will
              receive care from the best dentist in Nashik. Our clinic is led by
              the esteemed Dr. Nikhil Abbad, M.D.S., a highly skilled Consultant
              Prosthodontist specializing in Crowns, Bridges, and Oral Implants,
              and Dr. Leena Abbad, B.D.S., an expert in Endodontics and
              Restorative Dentistry. Together, they offer top-tier, compassionate
              care through a multidisciplinary approach.
              <br /><br/>
              At our dental clinic in Nashik, we provide comprehensive care for
              all ages, ensuring a comfortable and enjoyable experience. Our
              services include full mouth rehabilitation, dental implants, root
              canal treatment, dental veneers, digital smile designing, crowns &
              bridges, and braces. With our advanced CBCT machine and
              cutting-edge digital procedures, we deliver precise and effective
              treatments to enhance your smile and overall dental health.
              <br /><br/>
              Experience exceptional care at Abbad Dental Clinic and Implant
              Center. Contact us today to schedule your appointment and take the
              first step towards a healthier, more beautiful smile. If you're
              searching for a "dental clinic near me," look no further—your
              perfect choice is here.
            </Typography>
          </motion.div>
          
        </Grid>
        
      </Grid>
    // </Container>
  );
};

export default Clinicinfo;
