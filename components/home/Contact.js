import React from 'react';
import { Card, Hidden, Link } from '@mui/material';
import Box from '@mui/material/Box';
import Axios from 'axios';
import { Field, Form, Formik,ErrorMessage } from 'formik';
import * as yup from 'yup';
import AppTextField from '../Formik/AppTextField';
import { Button, FormControl, Grid, InputLabel } from '@mui/material';
import CustomizedSelectFormik from '../Formik/CustomizedSelectFormik';
import { useRouter } from 'next/router';
import GoogleRecaptcha from '../GoogleRecaptcha';
import Image from 'next/image';
import { motion } from 'framer-motion';



const All = [
  { key: 1, text: 'Braces/ aligners', value: 'Braces/ aligners' },
  { key: 2, text: 'Dental implants', value: 'Dental implants' },
  { key: 3, text: 'Dental veneers (smile designing)', value: 'Dental veneers (smile designing)' },
  { key: 4, text: 'Full mouth rehabilitation', value: 'Full mouth rehabilitation' },
  { key: 5, text: 'Pediatric (kids dentistry)', value: 'Pediatric (kids dentistry)' },
  { key: 6, text: 'Root canal', value: 'Root canal' },
  { key: 7, text: 'Wisdom teeth extraction/ Teeth extraction', value: 'Wisdom teeth extraction/ Teeth extraction' },
  { key: 8, text: 'Other', value: 'Other' }
];
const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter valid email ID'),
    // .required('Email ID is required'),
  mobilenumber: yup
    .string()
    .required('Mobile Number is mandatory')
    .matches(/^[0-9]+$/, 'Only digits are allowed for this field ')
    .length(10, 'Only 10 digit mobile number'),
  selection: yup
    .string(),
    // .required('It is required'),
    recaptcha: yup
    .string()
    .required('It is required'),
});

const Contact = () => {

  const router = useRouter()
  const onSubmit = async (values, submitProps) => {
    console.log({ values })
    Axios.post("/api/nodemail", {
      // Axios.post("/api/sendemail", {
      name: values.name,
      email: values.email,
      mobileno: values.mobilenumber,
      msg: values.msg,
      selection: values.selection

    })
      .then(function (response) {
        //handle success
        // console.log('Success')
        router.push('/thankyou')
        submitProps.setSubmitting(false);
        submitProps.resetForm();
      })
      .catch(function (response) {
        // handle error
        console.log('Rrtt', response)
        alert("Error in submission. Please resubmit");
      });
  };

            // Define the fade-right animation variants
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



  return (
   
      
      <Box id="contactform">
        

          <Grid container spacing={0}  sx={{p:0,backgroundColor:{xs:'#f2f5f5',sm:'#f2f5f5',md:'white'},mb:2}} >
         

            <Grid item xs={12} md={6} sx={{display:'flex'}}>
            {/* <motion.div
  className="textcontainer"
  variants={fadeLeftVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
> */}
<Hidden smDown>
            <Image
                        alt={'Clinic'}
                        src='/images/contactimg3.webp'
                        width={100}
                        height={100}
                        layout='responsive'></Image>
                        </Hidden>
                        {/* </motion.div> */}
              </Grid>
            <Grid item xs={12} md={6} sx={{display:'flex',  px: 2, py:2,}}>
            <motion.div
  className="textcontainer"
  variants={fadeUpVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>
              <Box>
              <div class="section-title" style={{textAlign:'left'}}>
          <h3> Elevate Your Dental Experience</h3>
          <p>Contact Us for a Bespoke Experience Crafted Just for You</p>

        </div>
        </Box>

        <Box sx={{   boxShadow:{xs:'rgba(100, 50, 93, 0.25) 0px 50px 60px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 1px -2px 3px 1px inset',md:'none'},
       p:{xs:2,sm:3,md:0},borderRadius:{xs:5,sm:5,md:0},backgroundColor:'white'
}}>
                <Formik
                  validateOnChange={true}
                  initialValues={{
                    name: '',
                    email: '',
                    mobilenumber: '',
                    msg: '',
                    selection: '',
                    recaptcha:''
                  }}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                  
                >
                  {({ isSubmitting }) => (
                    <Form style={{ textAlign: 'left' }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <AppTextField
                            placeholder='name'
                            name='name'
                            label='Name'
                            sx={{
                              width: '100%',
                              '& .MuiInputBase-input': {
                                fontSize: 14,
                              },
                            }}
                            variant='outlined'
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <AppTextField
                            placeholder='Email'
                            name='email'
                            label='Email ID'
                            sx={{
                              width: '100%',
                              '& .MuiInputBase-input': {
                                fontSize: 14,
                              },
                            }}
                            variant='outlined'
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <AppTextField
                            placeholder='Mobile Number'
                            name='mobilenumber'
                            label='Mobile Number'
                            sx={{
                              width: '100%',
                              '& .MuiInputBase-input': {
                                fontSize: 14,
                              },
                            }}
                            variant='outlined'
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <FormControl
                            sx={{
                              width: '100%',
                              // mt: 2,
                              '&.MuiInputBase-input': { fontSize: 14 },
                            }}
                          >
                            <InputLabel id='demo-simple-select-label'>
                              Select your interest
                            </InputLabel>
                            <Field
                              name='selection'
                              as='select'
                              options={All}
                              component={CustomizedSelectFormik}
                            ></Field>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} >
                          <Box>
                            <AppTextField
                              placeholder='Message'
                              name='msg'
                              label='Message'
                              sx={{
                                width: '100%',
                                '& .MuiInputBase-input': {
                                  fontSize: 14,
                                },
                              }}
                              variant='outlined'
                              multiline
                              rows='4'
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ mb: { xs: 3, lg: 3 } }}>
                          <GoogleRecaptcha />
                          <ErrorMessage name="recaptcha" component="div" style={{ color: 'red' }} />

                        </Grid>
                      </Grid>
                      {/* <pre>{JSON.stringify(errors, null, 4)}</pre> */}
                      {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}

                      <div>
                        <Button
                          variant='contained'
                         
                          color='primary'
                          disabled={isSubmitting}
                          sx={{
                            // fontWeight: Fonts.REGULAR,
                            textTransform: 'capitalize',
                            fontSize: 16,
                            minWidth: 160,
                            backgroundColor:'primary.dark'
                          }}
                          type='submit'
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
                </Box>
</motion.div>
            </Grid>
          {/* </Grid> */}
          </Grid>
        
          </Box>
  
  );
};
export default Contact;
