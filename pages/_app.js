import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "../utils";
import { MUIProvider } from "../providers";
import "slick-carousel/slick/slick.css";
import "../assets/css/style.css";
import "../styles/react-slick.css";
import { useRouter } from "next/router";
import Script from 'next/script';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    const { asPath } = useRouter()
    // console.log('RRRRR', asPath.split('/')[1] === 'blogs')
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
               
                                <title>
                                Dental Clinic in Thergaon, Pune - Dr. Dombe's Dental Clinic

                                </title>
                                <meta name="title" content="Dental Clinic in Thergaon, Pune - Dr. Dombe's Dental Clinic"></meta>
                                {/* <meta name='description' content="Visit Abbad Dental Clinic in Nashik, led by Dr. Nikhil Abbad, a 🏅Gold Medalist Prosthodontist specializing in Prosthodontics, Crowns & Bridges, & Implantology."></meta>
                                <meta name="google-site-verification" content="TGw02AJsXeaWAtmFxgztAkDkZmYy1ha3GcSdnXCZ8Nk" />
                                <link rel="canonical" href="https://www.abbaddentalclinic.com/"/> */}


                                {/* OG Tags -  */}
                                <meta property="og:type" content="Website"/>
<meta property="og:title" content="Abbad Dental Clinic and Implant Centre"/>
<meta property="og:description" content="Enhance your smile and boost your confidence with the best dentist in Nashik at Abbad Dental Clinic and Implant Centre in Nashik."/>
<meta property="og:url" content="https://www.abbaddentalclinic.com/"/>
<meta property="og:image" content="https://www.abbaddentalclinic.com/_next/image?url=%2Fimages%2Fnashikclinic%2Fclinics2.webp&w=1920&q=75"/>

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:site" content="@ACenter75541"/>
<meta name="twitter:title" content="Abbad Dental Clinic and Implant Centre"/>
<meta name="twitter:description" content="Enhance your smile and boost your confidence with the best dentist in Nashik at Abbad Dental Clinic and Implant Centre in Nashik."/>
<meta name="twitter:image" content="https://www.abbaddentalclinic.com/_next/image?url=%2Fimages%2Fnashikclinic%2Fclinics2.webp&w=1920&q=75"/>


<script type="application/ld+json"
                                 dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({

  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Abbad Dental Clinic & Implant Centre",
  "image": "https://www.abbaddentalclinic.com/_next/image?url=%2Fimages%2Fnashikclinic%2Fclinics2.webp&w=1920&q=75",
  "@id": "",
  "url": "https://www.abbaddentalclinic.com/",
  "telephone": "9713435111",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2-3, Jubiliant Heights, near Nirman House, Vidya Vikas Circle, towards College road",
    "addressLocality": "Nashik",
    "postalCode": "422005",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.0073972,
    "longitude": 73.7640498
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "21:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Sunday",
    "opens": "10:00",
    "closes": "13:00"
  }],
  "sameAs": [
    "https://www.facebook.com/abbaddentalclinicnashik/",
    "https://linktr.ee/AbbadDentalClinic",
    "https://www.instagram.com/abbaddentalclinic/",
    "https://www.youtube.com/@abbaddentalclinicnashik",
    "https://twitter.com/ACenter75541",
    "https://www.justdial.com/Nashik/Abbad-Dental-Clinic-Implant-Center-Vidya-Vikas-Circle-Towards-College-Rd-College-Road/0253PX253-X253-221218231157-S3D4_BZDET",
    "https://www.threads.net/@abbaddentalclinic",
    "https://in.linkedin.com/in/abbad-dental-clinic-and-implant-center-00a371324"
  ] 

}
),
}}
/> 

<script type="application/ld+json"
                                 dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Abbad Dental Clinic & Implant Centre",
  "image": "",
  "@id": "",
  "url": "https://www.abbaddentalclinic.com/",
  "telephone": "9923708233",
  "priceRange": "$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2055, Nehru Chowk, next to Sandeep Cut Piece Center, Dahipul, Gulal Wadi, Naikwadi Pura, Panchavati",
    "addressLocality": "Nashik",
    "postalCode": "422001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.004488,
    "longitude": 73.791526
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "20:30"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Sunday",
    "opens": "10:00",
    "closes": "13:00"
  }
   
  ] 
}
),
}}
/> 

<script type="application/ld+json"
                                 dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                      "@context": "https://schema.org",
                                      "@type": "Dentist",
                                      "name": "Dr. Nikhil Bharat Abbad",
                                      "image": "https://www.abbaddentalclinic.com/_next/image?url=%2Fimages%2Fdr%2Fdrnikhil2.jpg&w=1920&q=75",
                                      "@id": "",
                                      "url": "https://www.abbaddentalclinic.com/",
                                      "telephone": "9713435111",
                                      "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "2-3, Jubiliant Heights, near Nirman House, Vidya Vikas Circle, towards College road",
                                        "addressLocality": "Nashik",
                                        "postalCode": "422005",
                                        "addressCountry": "IN"
                                      } ,
                                      "sameAs": [
                                        "https://mymedisage.com/profile/567834",
                                        "https://www.practo.com/nashik/doctor/nikhil-bharat-abbad-dentist",
                                        "https://www.docindia.org/doctors/nashik/dr-nikhil-abbad-dentist",
                                        "https://kivihealth.com/iam/dr..nikhil.abbad.d3a10yh9ls4n",
                                        "https://in.linkedin.com/in/dr-nikhil-abbad-940b871b3"
                                      ] 
                                    }
                                    

),
}}
/> 

<script type="application/ld+json"
                                 dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                      "@context": "https://schema.org",
                                      "@type": "Dentist",
                                      "name": "Dr. Leena Nikhil Abbad",
                                      "image": "https://www.abbaddentalclinic.com/_next/image?url=%2Fimages%2Fdr%2Fdrleena.JPG&w=1920&q=75",
                                      "@id": "",
                                      "url": "https://www.abbaddentalclinic.com/",
                                      "telephone": "9923708277",
                                      "priceRange": "$$",
                                      "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "2-3, Jubiliant Heights, near Nirman House, Vidya Vikas Circle, towards College road",
                                        "addressLocality": "Nashik",
                                        "postalCode": "422005",
                                        "addressCountry": "IN"
                                      }  
                                    
}

),
}}
/> 
    
{/* Website Monitoring Code - */}

<Script
        id="smartlook"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', '962ad21cf16541cd7016e30b9f6fcdb20e0d7eea', { region: 'eu' });
          `,
        }}
      />

    
            </Head>
            <MUIProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
            </MUIProvider>
        </CacheProvider>
    );
}
