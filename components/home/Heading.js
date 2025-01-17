import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Heading({ data }) {
    return (
        <div>
            <Box>
                {data.map((item) => (
                    <Box sx={{textAlign:'center'}}>

                        <Typography
                            component="h3"
                            sx={{
                                fontSize: { xs: 27, md: 35 },
                                fontWeight: "600",
                              

                            }}
                        >
                            {item.title}

                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                // fontSize: { xs: 21, md: 22 },
                                fontWeight: "400",
                                color: 'primary.light',
                                pb:1

                            }}
                        >
                            {item.subtitle}

                        </Typography>
                    </Box>

                ))}
            </Box>
        </div>
    )
}
