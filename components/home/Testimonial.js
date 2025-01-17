import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import { MentorCardItem } from "../mentor";
import { data } from "./mentors.data";
import Heading from "./Heading";
import { headList5} from "../constants/titlefile";
const SliderArrow = (props) => {
    const { onClick, type, className } = props;
    return (
        <IconButton
            sx={{
                backgroundColor: "background.paper",
                color: "primary.dark",
                "&:hover": {
                    backgroundColor: "primary.dark",
                    color: "primary.contrastText",
                },
                bottom: "-28px !important",
                left: "unset !important",
                right: type === "prev" ? "60px !important" : "0 !important",
                zIndex: 10,
                boxShadow: 1,
            }}
            disableRipple
            color="inherit"
            onClick={onClick}
            className={className}
        >
            {type === "next" ? (
                <IconArrowForward sx={{ fontSize: 22 }} />
            ) : (
                <IconArrowBack sx={{ fontSize: 22 }} />
            )}
        </IconButton>
    );
};
const StyledDots = styled("ul")(({ theme }) => ({
    "&.slick-dots": {
        position: "absolute",
        left: 0,
        textAlign: "center",
        "& li": {
            marginRight: theme.spacing(2),
            "&.slick-active>div": {
                backgroundColor: theme.palette.primary.dark,
            },
        },
    },
}));
const Testimonial = () => {
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down("sm"));
    const sliderConfig = {
        infinite: true,
        // autoplay: true,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : 3,
        slidesToScroll: 1,
        prevArrow: <SliderArrow type="prev" />,
        nextArrow: <SliderArrow type="next" />,
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
                py: { xs: 5, md: 7 },
            }}
        >
            <Container>
               <Heading data={headList5}/>
                <Slider {...sliderConfig}>
                    {data.map((item) => (
                        <MentorCardItem key={String(item.id)} item={item} />
                    ))}
                </Slider>


            </Container>
        </Box>
    );
};
export default Testimonial;
