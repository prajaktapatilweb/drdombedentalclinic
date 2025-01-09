import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Box } from '@mui/material';

const MentorCardItem = ({ item }) => {
  // Define the fade-up animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 100 },  // Initial state: invisible and below the viewport
    visible: { 
      opacity: 1, 
      y: 0,  // Moves up to its original position
      transition: {
        duration: 0.8, // Duration of the animation
        ease: 'easeInOut', // Easing function
      },
    },
  };

  // State to toggle between truncated and full text
  const [isReadMore, setIsReadMore] = useState(false);

  // Function to toggle the read more state
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  // Ensure the description is a string or provide a fallback
  const description = item.description ? String(item.description) : '';
  
  // Define the truncated text
  const truncatedText = description.slice(0, 230); // Show only the first 100 characters

  return (
    <motion.div
      className="textcontainer"
      variants={fadeUpVariants}
      initial="hidden"         // Start in the hidden state
      whileInView="visible"    // Animate to the visible state when in view
      viewport={{ once: true }} // Optionally only animate once
    >
      <Box id="testimonials" className="testimonials" sx={{py:2}}>
        <div className="testimonial-item">
          <p>
            {isReadMore ? description : `${truncatedText}...`} {/* Show full or truncated text */}
            <span
              onClick={toggleReadMore}
              style={{ color: 'darkblue', cursor: 'pointer' }}
            >
              {isReadMore ? " Show Less" : " Read More"}
            </span>
          </p>
          <img src={item.photo} className="testimonial-img" alt="testimonial" />
          <h3>{item.name}</h3>
        </div>
      </Box>
    </motion.div>
  );
};

export default MentorCardItem;
