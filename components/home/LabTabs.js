import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Countdown from './Countdown';
import Clinicinfo from './Clinicinfo';
import { Container } from '@mui/material';
import Clinicinfo1 from './Clinicinfo1';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
<div class="section-title" id='aboutus'>
              <h2>About Dynamic Dental Care</h2>
            </div>

    <Box sx={{ width: '100%', typography: 'body1',marginTop:-5 }} >
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Thane" value="1" />
            <Tab label="Airoli" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"> <Clinicinfo/>  </TabPanel>
        <TabPanel value="2"><Clinicinfo1/> </TabPanel>
      </TabContext>
    </Box>
</>
  );
}
