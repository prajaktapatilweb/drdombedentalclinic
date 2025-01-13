import React from 'react';
import { Typography, Card, Link } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Axios from 'axios';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import AppTextField from '../Formik/AppTextField';
import { Button, FormControl, Grid, InputLabel } from '@mui/material';
import CustomizedSelectFormik from '../Formik/CustomizedSelectFormik';
import { useRouter } from 'next/router';
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import LocationOnIcon from '@mui/icons-material/LocationOn';


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
  name: yup.string().required('Name is required'),
  email: yup.string().email('Please enter valid email ID'),
  mobilenumber: yup
    .string()
    .required('Mobile Number is mandatory')
    .matches(/^[0-9]+$/, 'Only digits are allowed for this field ')
    .length(10, 'Only 10 digit mobile number'),
  selection: yup.string(),
  recaptcha: yup.string().required('Please complete the reCAPTCHA'),  // Make reCAPTCHA required
});

const Contact = () => {
  const contactno1 = "+917373736215";
  const router = useRouter();

  const onSubmit = async (values, submitProps) => {
    console.log({ values })
    Axios.post("/api/nodemail", {
      name: values.name,
      email: values.email,
      mobileno: values.mobilenumber,
      msg: values.msg,
      selection: values.selection
    })
      .then(function (response) {
        router.push('/thankyou')
        submitProps.setSubmitting(false);
        submitProps.resetForm();
      })
      .catch(function (response) {
        console.log('Rrtt', response)
        alert("Error in submission. Please resubmit");
      });
  };

  return (
    <Box id='contactform' sx={{ backgroundColor: 'white'}}>
      
      <section id="contact" class="contact"
  style={{
    position: "relative",
    background: "linear-gradient(to right, rgb(233, 224, 219), rgb(233, 224, 219))",
    overflow: "hidden",
    paddingTop: "150px", // Ensures content stays below the wave
    paddingBottom: "50px",
  }}
>
  {/* Wave Section */}
  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "150px" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        transform: "rotate(180deg)", // Flips the wave to the top
      }}
    >
      <path
        fill="#ffffff"
        fillOpacity="1"
        d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,213.3C840,203,960,149,1080,122.7C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>
      
  <Container>
          <Grid container spacing={2} alignItems='center' justifyContent='center'>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <div class="info-box" style={{ background: '#ffffff',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
                    <i class="bx"><LocationOnIcon sx={{ color: 'primary.main' }}/></i>
                    <h3 style={{fontSize:'18px'}}>Our Location</h3>
                    <p> HSR Dental Booth, 255, Royal Heights, 17th Cross Road, Sector 6,<br/> HSR Layout, Bengaluru, Karnataka 560 102.</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div class="info-box mt-4" style={{ background: '#ffffff',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'  }}>
                    <i class="bx"><EmailTwoToneIcon sx={{ color: 'primary.main' }}></EmailTwoToneIcon></i>
                    <h3>Working Hours</h3>
                    <p>Monday to Sunday:<br/>11 am–8 pm</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div class="info-box mt-4" style={{ background: '#ffffff',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'  }}>
                    <i class="bx">
                      <CallTwoToneIcon sx={{ color: 'primary.main' }} />
                    </i>
                    <h3>Contact Us</h3>
                    <Link href={`tel:${contactno1}`} target="_blank">+917373736215</Link>
                    <br/>
                    <Link href={`mailto:${'hsrdentalbooth@gmail.com'}`} target="_blank">hsrdentalbooth@gmail.com</Link>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ px: 3, py: 4,boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'  }}>
                <Formik
                  validateOnChange={true}
                  initialValues={{
                    name: '',
                    email: '',
                    mobilenumber: '',
                    msg: '',
                    selection: '',
                    recaptcha: ''
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
                          {/* <GoogleRecaptcha /> */}
                          <ErrorMessage name="recaptcha" component="div" style={{ color: 'red' }} />
                        </Grid>
                      </Grid>
                      <div>
                        <Button
                          variant='contained'
                          color='primary'
                          disabled={isSubmitting}
                          sx={{
                            textTransform: 'capitalize',
                            fontSize: 16,
                            minWidth: 160,
                          }}
                          type='submit'
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Card>
            </Grid>
          </Grid>
          </Container>
        </section>
     
    </Box>
  );
};
export default Contact;
