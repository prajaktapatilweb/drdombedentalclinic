import React from 'react';
import Box from '@mui/material/Box';
import Image from "next/legacy/image";
import {Typography } from '@mui/material';


const DownloadCard = ({ item }) => {
  return (
    <Box>
      <Box
        sx={{
          zIndex: 1,
          m: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          backgroundColor: 'transparent',
          // borderRadius: 2,
          // border: '1px #EDEDEE solid',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '250px', // Fixed height for the image container
            position: 'relative',
            backgroundColor: 'transparent',
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
            overflow: 'hidden', // Ensure the image doesn't overflow the container
          }}
        >
          <Image
            src={item.img}
            layout="fill" // Use "fill" to make the image cover the entire container
            objectFit="contain" // Ensures the image covers the full container without stretching
            alt="Associates"
          />
        </Box>
        <Box
          sx={{
            py: 3,
            px: 1,
            color: 'primary.contrastText',
            flex: 1,
            backgroundColor: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         <Typography
                        component="h2"
                        variant="h5"
                        sx={{ textAlign: "center", fontSize: "1.2rem",fontWeight:600 ,color: 'primary.dark'}}
                      >
           {item.title}
          </Typography>

          <Box
            variant='subtitle'
            sx={{
              fontSize: 14,
              textAlign: 'center',
              color:'#28282b'
            }}
          >
            {item.testpara}<br></br>
            ({item.post})
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadCard;
