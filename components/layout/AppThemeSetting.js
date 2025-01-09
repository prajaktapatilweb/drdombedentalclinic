import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { orange } from '@mui/material/colors';
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import Image from 'next/image';
import { Link } from '@mui/material';
import ScrollUp from '../home/ScrollUp';

const AppThemeSetting = () => {
 

  const contactno2 = "+919713435111";

  return (
    <>    
    <Box
      sx={{
        position: 'fixed',
        right: 0,
        bottom: { xs: 85, xl: 125 },
        zIndex: 1110,
        
      }}
      className='customizerOption'
    >
      

      <Box
        sx={{
          borderRadius: '3px',
          margin:0,
          left:0,
          backgroundColor: 'primary.light',
          '&:hover': {
            backgroundColor: orange[700],
          },
          '& button': {
            borderRadius: '30px 0 0 30px',

            '&:focus': {
              borderRadius: '30px 0 0 30px',
            },
          },
        }}
      >
        <IconButton>
        <Link
                href={`tel:${contactno2}`}
                target="_blank"
                className="footermenu"
              >
          <CallTwoToneIcon sx={{
            color: 'white',
            fontSize:'25px',
            fontWeight:500,
          }}
          />
        </Link>
        </IconButton>

      </Box>
   
        <ScrollUp></ScrollUp>

      </Box>
    
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        bottom: { xs: 85, xl: 90 },
        zIndex: 1110,
        
      }}
      className='customizerOption'
    >
       <Link
                href={`https://wa.me/${contactno2}`}
                target="_blank"
                className="footermenu"
                style={{ textDecoration: "underline", display: "inline-block" }}
              >
                <Image src="/images/whatsapp.webp" width={50} height={50} />
              </Link>
    </Box>
    </>

  );
};

export default AppThemeSetting;
