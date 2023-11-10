'use client'


import { Box, Container, Stack, Typography, IconButton } from '@mui/material';

import { FirstNavIcon, SettingsIcon } from '@/icons'

import AppBar from '@mui/material/AppBar';

export default function () {

  return (
    <AppBar position="static" sx={{ backgroundColor: '#86937F', boxShadow: 'none' }}>
      <Container maxWidth="100%">
        <Stack justifyContent='space-between' direction='row'>
          <img alt="Comapany logo" src="/company_logo.png" style={{ borderRadius: 5, margin: '.813rem 0rem .813rem 0.48rem', width: '15.38rem', height: '4rem' }} />
          <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1.65}>
            <IconButton sx={{ backgroundColor: '#4D5746', borderRadius: 1, width: '2.1rem', height: '2.13rem' }}>
              <FirstNavIcon />
            </IconButton>
            <IconButton sx={{ borderRadius: 1 }}>
              <SettingsIcon />
            </IconButton>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <img alt="Profile pic" src="/profile_pic.png" style={{ borderRadius: 1, width: '2.1rem', height: '2.13rem' }} />
              <Typography sx={{ ml: '.5rem' }}>David K. Croxton</Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
}