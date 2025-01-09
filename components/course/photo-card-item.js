import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
const PhotoCardItem = ({ item }) => {
  return (
    <Box>
      <Box sx={{p: 1}}>
        <Box>
         
          <Image
            alt='Happy Patients'
            src={`/images/patients/patients${item}.webp`}
            width={100}
            height={100}
            layout='responsive'
            style={{borderRadius:5,border:'3px solid #3e66a5',}}
            ></Image>
       

         
        </Box>
       
      </Box>
    </Box>);
};
export default PhotoCardItem;
