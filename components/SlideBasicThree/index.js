import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import MediaSlider from './MediaSlider';
import SlideItem from './SlideItem';
import { Box } from '@mui/material';

const settings = {

  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
};

const SlideBasicThree = ({ data }) => {
  return (
    <Box style={{ background: 'white' }}>
      <MediaSlider>
        <Slider {...settings}>
          {data.map((slide, index) => (
            <SlideItem key={index} slide={slide} />
          ))}
        </Slider>
      </MediaSlider>
    </Box>
    // </AppCard>
  );
};

export default SlideBasicThree;

SlideBasicThree.propTypes = {
  slideBasicThree: PropTypes.array,
};
