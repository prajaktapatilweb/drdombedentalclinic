import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Equipment from '../components/home/Equipment';
import Dentalservices from '../components/home/Dentalservices';
import DrAkshay from '../components/home/DrAkshay';
import Contact from '../components/home/Contact';
import Countdown from "../components/home/Countdown";
import Clinicinfo from "../components/home/Clinicinfo";
import Awards from "../components/home/Awards";
import DownloadCard from "../components/home/DownloadCard";
import Associates from "../components/home/Associates";
import Countup from "../components/home/Countup";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
      <Countdown />
      <Clinicinfo></Clinicinfo>

      <Countup></Countup>
      <Dentalservices/>
       <DrAkshay></DrAkshay> 
      <Suspense fallback=
        {<div>Component are loading please wait...</div>}>
        <Photogallery />
        {/* <Awards/> */}
        <Testimonial></Testimonial>
      </Suspense>
      <Equipment />
     <Associates/>
      <Contact></Contact> 
    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

