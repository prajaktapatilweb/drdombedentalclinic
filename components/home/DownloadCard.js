import React from 'react';
import Box from '@mui/material/Box';
import Image from "next/legacy/image";
import { Card, Typography } from '@mui/material';


const DownloadCard = ({ item }) => {
  return (
    <Box>
      <Card
        sx={{
          zIndex: 1,
          m: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          backgroundColor: 'primary.main',
          borderRadius: 2,
          border: '1px #EDEDEE solid',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '250px', // Fixed height for the image container
            position: 'relative',
            backgroundColor: 'white',
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
            overflow: 'hidden', // Ensure the image doesn't overflow the container
          }}
        >
          <Image
            src={item.img}
            layout="fill" // Use "fill" to make the image cover the entire container
            objectFit="cover" // Ensures the image covers the full container without stretching
            alt="Associates"
          />
        </Box>
        <Box
          sx={{
            py: 3,
            px: 1,
            color: 'primary.contrastText',
            flex: 1,
            backgroundColor: '#90BCD5',
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
      </Card>
    </Box>
  );
};

export default DownloadCard;
