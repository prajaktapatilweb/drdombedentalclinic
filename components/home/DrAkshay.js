import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from 'framer-motion';
import Heading from "./Heading";
import { headList3, headList9 } from "../constants/titlefile";



const DrDombe = () => {

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
    <>
      <Box id="Doctors" sx={{ py: 8,textAlign:'center' }}>
        <Container>
   <Heading  data={headList3}/>
        </ Container>

        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
        >


          <Grid item xs={12} sm={5} sx={{ p: 3}}>
            {/* Framer Motion div with whileInView to trigger zoom and position shift */}
            <motion.div
              initial={{ scale: 0.3, y: 0 }} // Start with normal scale and no shift
              whileInView={{ scale: 1, y: 20 }} // Zoom and move the image slightly upwards
              transition={{
                scale: { duration: 0.6, ease: 'easeInOut' }, // Zoom effect
                y: { duration: 0.6, ease: 'easeInOut', delay: 0.6 }, // Move down after zoom
              }}
              viewport={{ once: true }} // Animation triggers only once
            >
              
              <Image
                src="/images/dr/drdombe4.png"
                alt=" Dr. Nikhil Abbad at College Road Dental Clinic"
                width={100}
                height={100}
               layout="responsive"
               style={{margin:2}}
              />

            </motion.div>
          </Grid>
          <Grid item xs={12} sm={7}>
            <motion.div
              className="textcontainer"
              variants={fadeUpVariants}
              initial="hidden"         // Start in the hidden state
              whileInView="visible"    // Animate to the visible state when in view
              viewport={{ once: true }} // Optionally only animate once
            >
              <Box sx={{ px: 2 }}>

              
              

                <Box
                  sx={{

                    color: "text.primary",
                    lineHeight: 1.5,
                    marginBottom: 2.5,
                    fontSize: 17,
                    textAlign: "justify",
                    mt: 2

                  }}
                >
                  <Typography>
                  Dr. Sagar R. Dombe, M.D.S in Orthodontics, is a highly respected dental practitioner with over 8 years of clinical experience. As a Professor at Dr. D. Y. Patil Medical University since 2009, he combines academic excellence with practical expertise. Dr. Dombe is also the founder of Shape32, an innovative aligner manufacturing lab, and serves as the Founder Secretary of the Indian Aligner Society, contributing significantly to the advancement of orthodontic practices in India.<br></br>

<b>Education:</b> M.D.S in Orthodontics from Dr. D.Y. Patil Medical College, Pune.<br/>
<b>Experience:</b> Over 8 years in clinical practice; Professor at Dr. D.Y. Patil Medical University since 2009.<br/>
<b>Innovations:</b> Founder of Shape32, producing 100-150 aligner models daily.<br/>
<b>Leadership:</b> Key Opinion Leader (KOL) for 3Shape since 2018.<br/>
<b>Contributions:</b> Founder Secretary of the Indian Aligner Society.<br/>
<b>Presentations:</b> Notable papers on orthodontic topics presented at prestigious conferences since 2007.<br/>
<b>Academic Achievements:</b><br/>
Ranked 1st in All India AMUPMDC exam (2006).<br></br>
Consistently ranked first in undergraduate examinations (2001-2003).

                   </Typography>

                </Box>

                {/* <input type="checkbox" class="check" /> */}

              </Box>
            </motion.div>
          </Grid>



         
         


        </Grid>

      </Box>
    </>
  );
};
export default DrDombe;
