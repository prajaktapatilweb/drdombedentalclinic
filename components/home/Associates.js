import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import { Details } from "./mentors.data";
import DownloadCard from "./DownloadCard";
import { Typography } from "@mui/material";

const StyledDots = styled("ul")(({ theme }) => ({
    "&.slick-dots": {
        position: "relative",
        textAlign: "center",
        "& li": {
            marginRight: theme.spacing(1),
            "&.slick-active>div": {
                backgroundColor: theme.palette.primary.dark,
            },
        },
    },
}));
const Associates = () => {
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down("sm"));
    const sliderConfig = {
        infinite: true,
        arrows:false,
        // autoplay: true,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : 4,
        slidesToScroll: 1,
        dots: true,
        appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        customPaging: () => (
            <Box
                sx={{
                    height: 15,
                    width: 15,
                    backgroundColor: "divider",
                    display: "inline-block",
                    borderRadius: '50%',
                }}
            />
        ),
    };
    return (
        <Box
            id="testimonials"
            sx={{
                py: { xs: 5, md: 5 },
                backgroundColor: "white",
            }}
        >
            <Container>
            <Typography
              component="h3"
              sx={{
                fontSize: { xs: 27, md: 35 },
                fontWeight: "600",
                fontFamily: "League Spartan, sans-serif",
                textAlign:'center'
              
              }}
            >
                 Our Skilled Associate Dentists


              </Typography>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 21, md: 22 },
                fontWeight: "400",
                fontFamily: "League Spartan, sans-serif",
                color:'primary.light',
                   textAlign:'center',
                   pb:4
              
              }}
            >
                      A team of experts committed to providing quality dental care.


            </Typography>
                <Slider {...sliderConfig}>
                    {Details.map((item,i) => (
                        <DownloadCard key={i} item={item} />
                    ))}
                </Slider>


            </Container>
        </Box>
    );
};
export default Associates;
