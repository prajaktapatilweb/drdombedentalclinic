import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
const CourseCardItem = ({ item }) => {
  return (<Box sx={{
    px: 1,
    py: 1,
  }}>
    <Box sx={{

      backgroundColor: 'background.paper',
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      transition: (theme) => theme.transitions.create(['box-shadow']),

      boxShadow: 2,
      [`& .${iconButtonClasses.root}`]: {
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        boxShadow: 2,
      },

    }}>
      <Box sx={{
        lineHeight: 0,
        overflow: 'hidden',
        mb: 2,
      }}>
        <Image src={item.cover} height={100}
          width={100}
          layout='responsive' objectFit='contain' alt={'Course ' + item.id} style={{ borderTopLeftRadius: 7, borderTopRightRadius: 7,border:'2px grey solid' }} />
      </Box>
      <Box sx={{ p: 3, }}>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h5" sx={{ color: "primary.dark", overflow: 'hidden', fontSize: '1.5rem', fontWeight: 500 }}>
            {item.title}
          </Typography>

        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography component="span">
              {item.price}
            </Typography>
          </Box>

        </Box>
      </Box>
    </Box>
  </Box>);
};
export default CourseCardItem;
