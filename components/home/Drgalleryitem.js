import React from 'react';
import Image from 'next/image';

const Drgalleryitem = ({ item }) => {
  // Define an array of alt texts for each image
const altTexts = [
  "Abbad Dental Clinic - Exterior View",
  "Abbad Dental Clinic - Reception Area",
  "Abbad Dental Clinic - Waiting Room",
  "Abbad Dental Clinic - Treatment Room",
  "Abbad Dental Clinic - Implant Surgery Setup",
  "Abbad Dental Clinic - Pediatric Dentistry Section",
  "Abbad Dental Clinic - Consultation Room",
  "Abbad Dental Clinic - X-Ray Room",
  "Abbad Dental Clinic - Surgery Equipment Setup",
  "Abbad Dental Clinic - Orthodontics Room",
  "Abbad Dental Clinic - Lab Area",
 
];
    return (

        <div
        style={{
          position: 'relative',
          display: 'inline-block',
          borderRadius: '15px', // Adjust as needed for rounded corners
          padding: '4px', // Adjust padding to control border thickness
          backgroundImage: 'linear-gradient(to right, #765240 10%, #91664f 90%)',
        }}
      >
        <div
          style={{
            background: 'white', // Background inside the gradient border
            borderRadius: '10px', // Inner div border-radius to match the gradient
            overflow: 'hidden', // Ensures the image stays within the rounded borders
          }}
        >
          <Image
            alt={altTexts}
            src={`/images/nashikclinic/clinics${item}.webp`}
            width={100}
            height={100}
            layout="responsive" // Responsive layout for the image
            className="item"
          />
        </div>
      </div>
      



    );
};
export default Drgalleryitem;
