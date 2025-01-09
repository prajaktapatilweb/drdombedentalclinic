import React from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const SlideItem = ({ slide }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "90vh", sm: "80vh" },
        overflow: "hidden",
        borderRadius: 0
      }}
    >
      <div>
        {/* <div id="imageContainer"> */}
        <Image
          // src='/images/services/rootcanal4.jpg'
          src={slide.images}
          // height={100}
          // width={100}
          layout="fill"
          style={{ borderRadius: 0 }}
          // layout="responsive"
          objectFit="cover"
          alt={slide.title}
        // animation="kenburns 20s infinite"
        />
        {/* <img src={slide.image} /> */}
      </div>

      <Box
        sx={{
          // py: 3,
          // px: 4,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          // backgroundImage:
          //   'linear-gradient(to right,	rgba(62,43,206,0.8) 30%, rgba(45,211,170,0.7) 100%, rgba(45,211,170,0.5) 100%, rgba(45,211,170,0.8) 100%)',

          color: (theme) => theme.palette.common.white,
          height: "100%",
          display: "flex !important",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          {/* <Box sx={{ p: 5, mt: 25 }}> */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} mx={{ xs: 5, sm: 3, md: 30 }} mt={{ sm: 20, md: 40 }} justifyContent='center' alignItems='center' textAlign='center'>
              <Card
                sx={{
                  background: "rgba(250,250,249,0.9)",
                  borderTop: "5px solid #49caeb",
                  p: 5
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    letterSpacing: 1.5,
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Sequi ea ut et est quaerat
                  {/* Providing Quality Dental Care Since 2007 */}
                </Typography>
                <Typography variant="p"
                  // component="h2"
                  sx={{
                    // fontSize: { xs: 40, md: 60 },
                    mb: { xs: 3, sm: 3, lg: 5 },

                    letterSpacing: 1.5,
                    color: "black",
                    lineHeight: 1.5,
                  }}
                  gutterBottom
                >
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel.
                </Typography>

                <br></br> <br></br>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  sx={{
                    my: { xs: 5, sm: 3, md: 0 },
                    backgroundColor: "#49caeb",
                    p: 1,
                    color: "white",
                  }}
                >
                  Book Now
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default SlideItem;

SlideItem.propTypes = {
  slide: PropTypes.object,
};
