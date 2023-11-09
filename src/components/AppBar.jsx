'use client'

import Image from 'next/image'
import { Box, Container, Stack, Button, Toolbar, Typography, Grid, IconButton } from '@mui/material';
import { Adb, SettingsApplicationsSharp } from '@mui/icons-material'

import { FirstNavIcon, SettingsIcon } from '@/icons'

import AppBar from '@mui/material/AppBar';

export default function () {

  return (
    <AppBar position="static" sx={{ backgroundColor: '#86937F' }}>
      <Container maxWidth="100%">
        <Stack justifyContent='space-between' direction='row'>
          <img alt="Comapany logo" src="/company_logo.png" style={{ borderRadius: 5, margin: '.813rem 0rem .813rem 0.48rem', width: '15.38rem', height: '4rem' }} />
          <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2.5}>
            <IconButton sx={{ backgroundColor: '#4D5746', borderRadius: 1, width: '2.1rem', height: '2.13rem' }}>
              <FirstNavIcon />
            </IconButton>
            <IconButton sx={{ backgroundColor: '#4D5746', borderRadius: 1, width: '2.1rem', height: '2.13rem' }}>
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