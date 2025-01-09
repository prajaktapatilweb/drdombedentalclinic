import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Box, Button, Card, Container, Grid, Hidden, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme, useMediaQuery } from '@mui/material';

export default function Dentalservices() {
    var Details = [
        {
            icons: "/images/icons/implant.png",
            icons1: "/images/icons/implant1.png",
            title: 'Dental implants',
            desc:'Restore your smile with durable and natural-looking dental implants.'
        },
        {
            icons: "/images/icons/dental-care.png",
            icons1: "/images/icons/dental-care1.png",
            title: 'Crowns & Bridges',
            desc:'Enhance your smile with custom crowns and bridges that fit seamlessly.'
        },
        {
            icons: "/images/icons/dental-care2.png",
            icons1: "/images/icons/dental-care3.png",
            title: 'Tooth Extraction',
            desc:'Experience a comfortable and safe tooth extraction process.'
        },

        {
            icons: "/images/icons/dental-care.png",
            icons1: "/images/icons/dental-care3.png",
            title: 'Pediatric Dentistry',
            desc:'Ensure your child’s dental health with gentle, specialized care.'
        },
        {
            icons: "/images/icons/braces.png",
            icons1: "/images/icons/braces1.png",
            title: 'Braces & Aligners',
            desc:'Achieve a straighter smile with our advanced braces and aligners.'
        },
        {
            icons: "/images/icons/root.png",
            icons1: "/images/icons/root1.png",
            title: 'RCT (Root Canal Treatment)',
            desc:'Relieve pain and save your tooth with our gentle root canal treatment.'
        },
        {
            icons: "/images/icons/whitening.png",
            icons1: "/images/icons/whitening1.png",
            title: 'Teeth Whitening',
            desc:'Brighten your smile with fast and effective professional whitening.'
        },
        {
            icons: "/images/icons/veeners.png",
            icons1: "/images/icons/veeners1.png",
            title: 'Dental Veneers',
            desc:'Transform your smile with custom veneers for a flawless look.'
        },
       
    ]

    

    // State to track if the card is hovered
    const [hoveredCard, setHoveredCard] = useState(null);

    // Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger each child (card) by 0.2 seconds
      },
    },
  };
  
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below and invisible
    visible: {
      opacity: 1,
      y: 0, // Animate to its final position
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("sm"));// For screens smaller than 'sm'
  const [visibleCards, setVisibleCards] = useState(4); // Initially show 4 cards on mobile screens

  // Function to show more cards
  const handleShowMore = () => {
    setVisibleCards(Details.length); // Show all the cards when the button is clicked
  };

    return (
        <div>
       
       <section className="events1">
      {/* <section className='section' style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7),rgba(255,255,255,0.7)" }}> */}
      <section
  className="curved-section"
  style={{
    backgroundImage: "linear-gradient(to right, rgba(10,70,142,0.9), rgba(10,70,142, 0.9))",
    // Adjust based on the height of the curve
    paddingBottom: '100px',
  }}
>
        <Box sx={{py:7}} className='contents'>  
                <div class="section-title" style={{color:'white'}}>
                    <h3>The Art of Luxurious Dentistry</h3>
                    <p>Unparalleled Care for Those Who Expect the Best</p>
                </div>
             {/* Framer Motion Container for the animation */}
        <Container component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
         
        <Grid container spacing={0} sx={{py:3}} textAlign='center'>
         {/* Show limited cards on mobile, and all cards on desktop */}
         {Details.slice(0, isMobile ? visibleCards : Details.length).map((item, i) => (
          <Grid item xs={12} sm={4} md={3} key={i} alignItems='center' justifyContent='center' textAlign='center' sx={{ display: 'flex'}}>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Box 
                sx={{
                 
                  py:4,
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: '"Poppins", sans-serif',
                  width: '100%',
                  height: '100%',
                  textAlign:'center'
                 
                  
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Grid container spacing={0} alignItems='center' justifyContent='center' textAlign='center'>
                  <Grid item xs={12}  md={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        height: '100%',
                      }}
                    >
                      <Avatar
                        alt="R"
                        src=''
                        sx={{
                          width: 50,
                          height: 50,
                          backgroundColor:'transparent',
                          // backgroundImage: 'linear-gradient(to right, #305b9f 0%, #469ce2 100%)',
                          padding: 0,
                        }}
                      >
                        <Image
                          src={hoveredCard === i ? item.icons1 : item.icons}
                          width={45}
                          height={45}
                        />
                      </Avatar>
                    </Box>
                
                    <Typography variant='h4' sx={{ fontFamily: "League Spartan, sans-serif", fontWeight: 500, color: 'white', fontSize: '21px' }}>
                      {item.title}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        ))}

        {/* Show "Explore More" button only if there are hidden cards */}
        {visibleCards < Details.length && (
          <Grid item xs={12} textAlign="center">
            <Hidden smUp>
            <Button variant="contained" sx={{backgroundColor:'primary.dark',mt:3}} onClick={handleShowMore}>
              Explore More
            </Button>
            </Hidden>
          </Grid>
        )}
      </Grid>
                </Container >
                </Box>
         
            </section></section>
            
        </div >
    )
}
