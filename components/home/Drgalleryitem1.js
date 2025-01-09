import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
const Drgalleryitem1 = ({ item }) => {
    return (

                    <Image
                        alt={'Clinic' + item.id}
                        src={`/images/Award/awards${item}.jpg`}
                        width={100}
                        height={100}
                        layout='responsive' style={{borderRadius:10}}></Image>

            
);
};
export default Drgalleryitem1;
