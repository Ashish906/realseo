'use client'

import Image from 'next/image'
import { Accordion, AccordionSummary, Box, Container, Toolbar, Typography } from '@mui/material';
import { Adb, ExpandMore, SettingsApplicationsSharp } from '@mui/icons-material'

import AppBar from '@mui/material/AppBar';

export default function () {

  return (
    <AppBar position="static" sx={{ backgroundColor: '#86937F' }}>
      <Container maxWidth="100%">
        <Toolbar disableGutters>
            <Box sx={{flexGrow: 1}}>
                <Image alt="Comapany logo" src="/company_logo.png" style={{ borderRadius: 6, margin: '11px 0px 5px 0px' }} width={ 246 } height={64} />
            </Box>
            <Box sx={{ backgroundColor: '#4D5746', width: '33px', height: '34px', borderRadius: 1, mr: 2 }} display='flex' alignItems='center' justifyContent='center'>
                <Adb sx={{ width: '16px', height: '17px' }}/>
            </Box>
            <Box sx={{ backgroundColor: '#4D5746', width: '33px', height: '34px', borderRadius: 1, mr: 2 }} display='flex' alignItems='center' justifyContent='center'>
                <SettingsApplicationsSharp sx={{ width: '16px', height: '17px' }} />
            </Box>
            <Image alt="Comapany logo" src="/profile_pic.png" style={{ borderRadius: 5 }} width={33} height={34} />
            {/* <Accordion sx={{ backgroundColor: '#86937F', color: 'white', border: 'none', boxShadow: 'none', width: 'auto' }}>
                <AccordionSummary
                    expandIcon={<ExpandMore color='white' />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                > */}
                    <Typography>David K. Croxton</Typography>
                {/* </AccordionSummary>
            </Accordion> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}