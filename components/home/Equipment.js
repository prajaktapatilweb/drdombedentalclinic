import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Heading from "./Heading";
import { headList3, headList6 } from "../constants/titlefile";

// Define animation variants for each box (fade-up motion)
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and slightly below
  visible: {
    opacity: 1,
    y: 0, // Reset to normal position
    transition: {
      duration: 0.8, // Animation duration
      ease: "easeInOut",
    },
  },
};

// Parent container animation that staggers each child's appearance
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Stagger each child's animation by 0.3 seconds
    },
  },
};

export default function Equipment() {
  const Details = [
    {
      img: "/images/equip/eqip21.jpg",
      altitle: "Dental Scanner",
      desc: "Dental Scanner",
    },
    {
      img: "/images/equip/xray2.jpg",
      altitle: "Digital X Ray",
      desc: "Digital X Ray",
    },
    {
      img: "/images/equip/equip23.jpg",
      altitle: "Dental Loupes",
      desc: "Dental Loupes",
    },
    {
      img: "/images/equip/cbct.jpg",
      altitle: "CBCT",
      desc: "CBCT Machine",
    },
  ];

  return (
    <div>
      <section
  style={{
    position: "relative",
    background: "linear-gradient(to right, rgb(233, 224, 219), rgb(233, 224, 219))",
    overflow: "hidden",
    paddingBottom: "100px", // Ensures content stays above the wave
  }}
>
      <Box sx={{py:7}}>
        <Container>
        <Heading  data={headList6}/>
        <br/>

          {/* Apply motion.div to the container with staggered animation */}
          <Grid
            container
            spacing={1}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Ensure the animation triggers once
           
          >
            {Details.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                {/* Each box is animated with fade-up motion */}
                <motion.div variants={fadeUpVariants}>
                  <Box
                    sx={{
                      p: 1,
                      backgroundColor: "background.paper",
                      borderRadius: 4,
                      boxShadow:
                        "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                      transition: (theme) =>
                        theme.transitions.create(["box-shadow"]),
                      "&:hover": {
                        boxShadow: 2,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        lineHeight: 0,
                        overflow: "hidden",
                        borderRadius: 3,
                        mb: 2,
                      }}
                    >
                      <Image
                        src={item.img}
                        width={100}
                        height={100}
                        layout="responsive"
                        alt={item.altitle}
                      />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        component="h2"
                        variant="h5"
                        sx={{ textAlign: "center", fontSize: "1.2rem" }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "150px" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none" /* Ensures scaling fits the container */
      style={{
        display: "block",
        width: "100%",
        height: "100%", // Height of the wave
      }}
    >
      <path
        fill="#ffffff"
        fillOpacity="1"
        d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,213.3C840,203,960,149,1080,122.7C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>
      </Box>
      </section>
    </div>
  );
}
